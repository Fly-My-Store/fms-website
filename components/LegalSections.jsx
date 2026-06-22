function renderList(items) {
  if (!items?.length) return null;

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function renderSubsections(subsections) {
  if (!subsections?.length) return null;

  return (
    <div className="legal-subsections">
      {subsections.map((subsection) => (
        <div key={subsection.title} className="legal-subsection">
          <h3>{subsection.title}</h3>
          {subsection.body ? <p>{subsection.body}</p> : null}
          {renderList(subsection.list)}
          {subsection.paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function LegalSections({ sections }) {
  return sections.map((section) => (
    <section key={section.title}>
      <h2>{section.title}</h2>
      {section.body ? <p>{section.body}</p> : null}
      {renderList(section.list)}
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {renderSubsections(section.subsections)}
    </section>
  ));
}
