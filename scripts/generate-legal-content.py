#!/usr/bin/env python3
"""Generate legal content JS modules from extracted PDF text."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CONTENT_DIR = ROOT / "content"

LIGATURES = str.maketrans(
    {
        "\ufb01": "fi",
        "\ufb02": "fl",
        "\ufb00": "ff",
        "\ufb03": "ffi",
        "\ufb04": "ffl",
    }
)

NOISE_LINES = {
    "prs india",
    "prs india+ 1",
    "dpdpa.com",
    "cyril amarchand mangaldas",
    "ministry of electronics and information technology",
}


def clean_text(text: str) -> str:
    text = text.translate(LIGATURES)
    text = text.replace("PRIV ACY", "PRIVACY").replace("PRIV ATE", "PRIVATE")
    text = text.replace("AS-A V AILABLE", "AS-AVAILABLE")
    text = re.sub(r"developer@ﬂymystore\.com", "developer@flymystore.com", text)
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{2,}", "\n\n", text)
    text = re.sub(r"(?<=[\n.])(?<!\d)\s*(?=\d{1,2}\.\s+[A-Z][a-z]{3,})", "\n", text)
    text = re.sub(r"\s(?=[A-D]\.\s+[A-Za-z\"'])", "\n", text)
    text = re.sub(r"\s(?=•\s)", "\n", text)
    lines = []
    for raw in text.split("\n"):
        line = raw.strip()
        if not line:
            continue
        if line.lower() in NOISE_LINES:
            continue
        lines.append(line)
    return "\n".join(lines)


def split_sections(text: str) -> list[dict]:
    """Parse numbered sections like '1. Title' with optional lettered subsections."""
    text = clean_text(text)
    intro_match = re.match(r"^(.+?)(?=\n\d+\.\s)", text, re.S)
    intro = intro_match.group(1).strip() if intro_match else ""
    body = text[len(intro) :].strip() if intro else text

    sections: list[dict] = []
    if intro:
        intro_lines = [line for line in intro.split("\n") if line.strip()]
        title_line = intro_lines[0] if intro_lines else "Introduction"
        rest = intro_lines[1:]
        section = {"title": title_line, "paragraphs": []}
        for line in rest:
            if line.startswith("Last Updated:"):
                continue
            section["paragraphs"].append(line)
        if section["paragraphs"]:
            sections.append(section)

    parts = re.split(r"\n(?=\d+\.\s)", body)
    for part in parts:
        part = part.strip()
        if not part:
            continue
        m = re.match(r"^(\d+\.\s.+?)(?:\n(.+))?$", part, re.S)
        if not m:
            continue
        title = m.group(1).strip()
        content = (m.group(2) or "").strip()
        section: dict = {"title": title, "paragraphs": [], "list": [], "subsections": []}

        current_sub = None
        for line in content.split("\n"):
            line = line.strip()
            if not line:
                continue
            sub_match = re.match(r"^([A-D]\.\s.+)$", line)
            if sub_match:
                if current_sub:
                    section["subsections"].append(current_sub)
                current_sub = {"title": sub_match.group(1), "paragraphs": [], "list": []}
                continue
            if line.startswith("•") or re.match(r"^\d+\.", line):
                item = re.sub(r"^(\d+\.|•)\s*", "", line)
                if current_sub is not None:
                    current_sub["list"].append(item)
                else:
                    section["list"].append(item)
                continue
            if current_sub is not None:
                current_sub["paragraphs"].append(line)
            else:
                section["paragraphs"].append(line)

        if current_sub:
            section["subsections"].append(current_sub)

        for key in ("paragraphs", "list", "subsections"):
            if not section[key]:
                del section[key]

        sections.append(section)

    return sections


def merge_terms_of_use(apple: str, android: str) -> list[dict]:
    apple_sections = {s["title"]: s for s in split_sections(apple)}
    android_sections = {s["title"]: s for s in split_sections(android)}

    intro = {
        "title": "Terms of Use",
        "paragraphs": [
            "Welcome to the FLY MY STORE mobile application and digital platform.",
            "This Terms of Use agreement is a legally binding contract between you (\"User\", \"You\") and FLY MY STORE PRIVATE LIMITED (\"Company\", \"We\", \"Us\", or \"Our\"), an Indian company registered under the Companies Act, 2013, with its registered office at H. No 24, Block No 2, Shastrinagar, Kadma, Jamshedpur, Jharkhand, PIN 831005.",
            "This document governs your download, installation, access, and interactive use of the FLY MY STORE mobile application on iOS and Android devices, our website, and related digital interfaces (collectively, the \"Platform\").",
            "By downloading, installing, browsing, or tapping \"Accept\" on the Platform, you agree to comply with and be bound by these Terms of Use. If you do not agree, please delete the application immediately from your device.",
        ],
    }

    eula = {
        "title": "1. End User License Agreement (EULA)",
        "subsections": [],
    }
    if "1. End User License Agreement (EULA)" in apple_sections:
        eula["subsections"].extend(apple_sections["1. End User License Agreement (EULA)"].get("subsections", []))
    if "1. Google Play Store License Grant" in android_sections:
        android_eula = android_sections["1. Google Play Store License Grant"]
        eula["subsections"].append({"title": "C. Google Play Store Required Terms", "paragraphs": [], "list": []})
        for sub in android_eula.get("subsections", []):
            if sub["title"].startswith("A."):
                eula["subsections"][-1]["paragraphs"].extend(sub.get("paragraphs", []))
                eula["subsections"][-1]["list"].extend(sub.get("list", []))
            elif sub["title"].startswith("B."):
                eula["subsections"][-1]["list"].extend(sub.get("list", []))
                if sub.get("paragraphs"):
                    eula["subsections"][-1]["paragraphs"].extend(sub["paragraphs"])

    merged = [intro, eula]

    android_permissions = android_sections.get("2. Android Device Permissions & Data Transparency")
    if android_permissions:
        merged.append(
            {
                "title": "2. Device Permissions & Data Transparency",
                "paragraphs": android_permissions.get("paragraphs", [])
                or [
                    "To fulfill hyperlocal, multi-vendor deliveries from local shopkeepers to your location, the Platform requires specific device permissions on iOS and Android."
                ],
                "list": android_permissions.get("list", []),
            }
        )

    for key, rename in [
        ("2. Intellectual Property Rights", "3. Intellectual Property Rights"),
        ("3. Platform Availability & App Updates", "4. Platform Availability & App Updates"),
        ("4. User-Generated Content & Reviews", "5. User-Generated Content & Reviews"),
        ("5. Third-Party Links & External Software", "6. Third-Party Links & External Software"),
        ("6. Disclaimers & Indemnification", "7. Disclaimers & Indemnification"),
    ]:
        if key in apple_sections:
            section = dict(apple_sections[key])
            section["title"] = rename
            merged.append(section)

    android_ip = android_sections.get("3. Intellectual Property and Prohibited Platform Activity")
    if android_ip and merged:
        ip_section = next((s for s in merged if s["title"].startswith("3. Intellectual Property")), None)
        if ip_section:
            for sub in android_ip.get("subsections", []):
                if sub["title"].startswith("B."):
                    ip_section.setdefault("subsections", []).append(
                        {"title": "C. Prohibited Platform Activity (Android)", "list": sub.get("list", [])}
                    )

    termination = android_sections.get("6. Termination & App Account Deletion")
    if termination:
        merged.append({"title": "8. Termination & Account Deletion", **{k: v for k, v in termination.items() if k != "title"}})

    if "7. Governing Law" in apple_sections:
        section = dict(apple_sections["7. Governing Law"])
        section["title"] = "9. Governing Law"
        merged.append(section)

    if "8. Contact & Legal Notices" in apple_sections:
        section = dict(apple_sections["8. Contact & Legal Notices"])
        section["title"] = "10. Contact & Legal Notices"
        merged.append(section)

    return merged


def js_string(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)


def render_section(section: dict, indent: int = 2) -> str:
    sp = " " * indent
    lines = [f"{sp}{{"]
    lines.append(f'{sp}  title: {js_string(section["title"])},')
    if section.get("body"):
        lines.append(f'{sp}  body: {js_string(section["body"])},')
    if section.get("paragraphs"):
        lines.append(f"{sp}  paragraphs: [")
        for p in section["paragraphs"]:
            lines.append(f"    {js_string(p)},")
        lines.append(f"{sp}  ],")
    if section.get("list"):
        lines.append(f"{sp}  list: [")
        for item in section["list"]:
            lines.append(f"    {js_string(item)},")
        lines.append(f"{sp}  ],")
    if section.get("subsections"):
        lines.append(f"{sp}  subsections: [")
        for sub in section["subsections"]:
            lines.append(render_section(sub, indent + 4) + ",")
        lines.append(f"{sp}  ],")
    lines.append(f"{sp}}}")
    return "\n".join(lines)


def write_sections(path: Path, export_name: str, sections: list[dict]) -> None:
    rendered = ",\n".join(render_section(s) for s in sections)
    path.write_text(
        f"export const {export_name} = [\n{rendered}\n];\n",
        encoding="utf-8",
    )


def main() -> None:
    pdfs = json.loads(Path("/tmp/legal_pdfs.json").read_text(encoding="utf-8"))
    CONTENT_DIR.mkdir(parents=True, exist_ok=True)

    privacy = split_sections(pdfs["privacy"]["text"])
    tos = split_sections(pdfs["tos"]["text"])
    tou = merge_terms_of_use(pdfs["tou_apple"]["text"], pdfs["tou_android"]["text"])

    write_sections(CONTENT_DIR / "privacy-policy.js", "privacyPolicySections", privacy)
    write_sections(CONTENT_DIR / "terms-of-service.js", "termsOfServiceSections", tos)
    write_sections(CONTENT_DIR / "terms-of-use.js", "termsOfUseSections", tou)

    combined_path = CONTENT_DIR / "terms.js"
    combined_path.write_text(
        "import { termsOfServiceSections } from './terms-of-service';\n"
        "import { termsOfUseSections } from './terms-of-use';\n\n"
        "export const termsSections = [\n"
        "  {\n"
        "    title: 'Terms & Conditions',\n"
        "    paragraphs: [\n"
        "      'Welcome to FLY MY STORE.',\n"
        "      'These Terms & Conditions (\"Terms\") combine our platform Terms of Service and app Terms of Use into a single agreement between you (\"User\", \"You\", \"Customer\", \"Vendor\", or \"Delivery Partner\") and FLY MY STORE PRIVATE LIMITED (\"Company\", \"We\", \"Us\", or \"Our\").',\n"
        "      'They govern your access to and use of the FLY MY STORE mobile applications (Google Play Store and Apple App Store), our website, and related services (collectively, the \"Platform\").',\n"
        "      'The Company is registered under the laws of India, with its registered office at H. No 24, Block No 2, Shastrinagar, Kadma, Jamshedpur, Jharkhand, PIN 831005.',\n"
        "      'By downloading, installing, accessing, or using the Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, you must discontinue use immediately.',\n"
        "    ],\n"
        "  },\n"
        "  {\n"
        "    title: 'Part A — Platform Terms of Service',\n"
        "    body: 'The following sections govern marketplace operations, orders, payments, and platform use.',\n"
        "  },\n"
        "  ...termsOfServiceSections.slice(1),\n"
        "  {\n"
        "    title: 'Part B — App Terms of Use',\n"
        "    body: 'The following sections govern your download, installation, and use of the mobile application, including Apple App Store and Google Play Store requirements.',\n"
        "  },\n"
        "  ...termsOfUseSections.slice(1, -2),\n"
        "];\n",
        encoding="utf-8",
    )

    print("Wrote:", CONTENT_DIR / "privacy-policy.js")
    print("Wrote:", CONTENT_DIR / "terms-of-service.js")
    print("Wrote:", CONTENT_DIR / "terms-of-use.js")
    print("Wrote:", combined_path)


if __name__ == "__main__":
    main()
