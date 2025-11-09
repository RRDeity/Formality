// Lightweight HubSpot REST helpers using a private app token.
// Set env var HUBSPOT_PRIVATE_APP_TOKEN in Vercel.

const HUBSPOT_BASE = "https://api.hubapi.com";

function getAuthHeaders() {
  const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  if (!token) return null;
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  };
}

// Fetch list of forms (v2 legacy; enough for names/ids to demo)
export async function listForms() {
  const headers = getAuthHeaders();
  if (!headers) return null;

  const url = `${HUBSPOT_BASE}/forms/v2/forms`;
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`HubSpot forms error: ${res.status}`);
  const data = await res.json();

  // Normalize to {id, name}
  return (Array.isArray(data) ? data : []).map(f => ({
    id: String(f.guid || f.portalId || f.name || Math.random()),
    name: f.name || f.guid || "Unnamed form"
  }));
}

// Fetch (demo) “history” via submissions v3 (if you have a form GUID)
export async function getFormHistory(formId /*string*/, contactEmail /*string?*/) {
  // The public Forms API v3 requires proper endpoints and scopes; for demo,
  // we simulate or return empty to avoid 403s if permissions are missing.
  // If you later enable forms submission APIs, add the official calls here.
  return { submissions: [] };
}
