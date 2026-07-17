const BASE = "/api";

async function request(path, opts = {}) {
  const res = await fetch(BASE + path, {
    credentials: "include",
    headers: { "Content-Type": "application/json", ...(opts.headers || {}) },
    ...opts,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `Request failed (${res.status})`);
  return data;
}

export const api = {
  // auth
  setupStatus: () => request("/auth/setup-status"),
  register: (email, password) =>
    request("/auth/register", { method: "POST", body: JSON.stringify({ email, password }) }),
  login: (email, password) =>
    request("/auth/login", { method: "POST", body: JSON.stringify({ email, password }) }),
  logout: () => request("/auth/logout", { method: "POST" }),
  me: () => request("/auth/me"),

  // leads
  submitLead: (payload) =>
    request("/leads", { method: "POST", body: JSON.stringify(payload) }),
  listLeads: (params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return request(`/leads${qs ? "?" + qs : ""}`);
  },
  getLead: (id) => request(`/leads/${id}`),
  updateStatus: (id, status) =>
    request(`/leads/${id}/status`, { method: "PATCH", body: JSON.stringify({ status }) }),
  addNote: (id, text) =>
    request(`/leads/${id}/notes`, { method: "POST", body: JSON.stringify({ text }) }),
  stats: () => request("/leads/stats/summary"),
};
