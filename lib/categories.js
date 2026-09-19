const API_BASE = (process.env.FMS_API_URL || 'https://api.flymystore.com/api/v1').replace(/\/+$/, '');

const HIDDEN_ROOT_SLUGS = new Set([
  'product-reference',
  'demo-product-reference',
]);

function mapCategory(row) {
  const name = String(row?.name || '').trim();
  const slug = String(row?.slug || '').trim();
  if (!name || !slug || HIDDEN_ROOT_SLUGS.has(slug)) return null;
  return {
    id: row.id || slug,
    slug,
    name,
    iconUrl: row.icon_thumb_url || row.icon_url || row.icon || null,
  };
}

/** Live root categories (`main_only`) for the marketing site. */
export async function fetchRootCategories() {
  try {
    const res = await fetch(
      `${API_BASE}/customer/browse/categories?main_only=true&limit=50`,
      { next: { revalidate: 300 } },
    );
    if (!res.ok) return [];
    const json = await res.json();
    const rows = Array.isArray(json?.data) ? json.data : [];
    return rows.map(mapCategory).filter(Boolean);
  } catch {
    return [];
  }
}
