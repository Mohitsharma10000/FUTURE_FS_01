import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../services/api";
import StatusBadge from "../components/StatusBadge";

export default function DashboardPage() {
  const [data, setData] = useState({ items: [], total: 0, page: 1, pages: 1 });
  const [stats, setStats] = useState(null);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const load = async () => {
    setLoading(true);
    setErr("");
    try {
      const params = { page, limit: 20 };
      if (q) params.q = q;
      if (status) params.status = status;
      const [leads, s] = await Promise.all([api.listLeads(params), api.stats()]);
      setData(leads);
      setStats(s);
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line
  }, [page, status]);

  return (
    <div className="container">
      <div className="eyebrow">Dashboard</div>
      <h1 style={{ marginBottom: 20 }}>Leads</h1>

      {stats && (
        <>
          <div className="pipeline">
            <div className="pipeline-stage">
              <span className="pipeline-eyebrow">01 · New</span>
              <span className="pipeline-value">{stats.byStatus.new}</span>
            </div>
            <div className="pipeline-stage">
              <span className="pipeline-eyebrow">02 · Contacted</span>
              <span className="pipeline-value">{stats.byStatus.contacted}</span>
            </div>
            <div className="pipeline-stage">
              <span className="pipeline-eyebrow">03 · Converted</span>
              <span className="pipeline-value">{stats.byStatus.converted}</span>
            </div>
          </div>

          <div className="stats-secondary">
            <div className="stat-chip">
              <div className="label">Total leads</div>
              <div className="value">{stats.total}</div>
            </div>
            <div className="stat-chip">
              <div className="label">This week</div>
              <div className="value">{stats.thisWeek}</div>
            </div>
            <div className="stat-chip">
              <div className="label">Conversion rate</div>
              <div className="value">{(stats.conversionRate * 100).toFixed(1)}%</div>
            </div>
          </div>
        </>
      )}

      <div className="card">
        <form
          className="row"
          onSubmit={(e) => { e.preventDefault(); setPage(1); load(); }}
          style={{ marginBottom: 16 }}
        >
          <input placeholder="Search name, email, message…" value={q} onChange={(e) => setQ(e.target.value)} />
          <select value={status} onChange={(e) => { setStatus(e.target.value); setPage(1); }} style={{ maxWidth: 180 }}>
            <option value="">All statuses</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="converted">Converted</option>
          </select>
          <button className="btn" style={{ flex: "0 0 auto" }}>Search</button>
        </form>

        {err && <p className="error">{err}</p>}

        {loading ? (
          <p className="muted">Loading…</p>
        ) : (
          <>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Name</th><th>Email</th><th>Source</th><th>Status</th><th>Created</th><th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.items.map((l) => (
                    <tr key={l._id}>
                      <td>{l.name}</td>
                      <td className="mono">{l.email}</td>
                      <td className="muted">{l.source}</td>
                      <td><StatusBadge status={l.status} /></td>
                      <td className="mono">{new Date(l.createdAt).toLocaleDateString()}</td>
                      <td><Link to={`/leads/${l._id}`}>View →</Link></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {!data.items.length && (
              <div className="empty-state">
                <div className="eyebrow">Nothing here yet</div>
                <p>No leads match this search. New inquiries from your website form will show up here.</p>
              </div>
            )}

            {data.items.length > 0 && (
              <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="muted">Page {data.page} of {data.pages} — {data.total} total</span>
                <div>
                  <button className="btn secondary sm" disabled={page <= 1} onClick={() => setPage(page - 1)}>Prev</button>
                  <button className="btn sm" style={{ marginLeft: 8 }} disabled={page >= data.pages} onClick={() => setPage(page + 1)}>Next</button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
