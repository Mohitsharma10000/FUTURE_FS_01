import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../services/api";
import StatusBadge from "../components/StatusBadge";

export default function LeadDetailPage() {
  const { id } = useParams();
  const [lead, setLead] = useState(null);
  const [note, setNote] = useState("");
  const [err, setErr] = useState("");

  const load = () => api.getLead(id).then(setLead).catch((e) => setErr(e.message));
  useEffect(() => { load(); }, [id]);

  if (err) return <div className="container"><p className="error">{err}</p></div>;
  if (!lead) return <div className="container"><p className="muted">Loading…</p></div>;

  const changeStatus = async (s) => { await api.updateStatus(id, s); load(); };
  const addNote = async (e) => {
    e.preventDefault();
    if (!note.trim()) return;
    await api.addNote(id, note.trim());
    setNote("");
    load();
  };

  return (
    <div className="container">
      <p><Link to="/dashboard">← Back to leads</Link></p>

      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
          <div>
            <div className="eyebrow">Lead</div>
            <h1 style={{ margin: 0 }}>{lead.name}</h1>
          </div>
          <StatusBadge status={lead.status} />
        </div>
        <p className="muted mono" style={{ marginTop: 6 }}>Received {new Date(lead.createdAt).toLocaleString()}</p>

        <div className="row" style={{ marginTop: 20 }}>
          <div>
            <label>Email</label>
            <p className="mono" style={{ margin: 0 }}>{lead.email}</p>
          </div>
          {lead.phone && (
            <div>
              <label>Phone</label>
              <p className="mono" style={{ margin: 0 }}>{lead.phone}</p>
            </div>
          )}
          <div>
            <label>Source</label>
            <p style={{ margin: 0 }}>{lead.source}</p>
          </div>
        </div>

        {lead.message && (
          <div style={{ marginTop: 20 }}>
            <label>Message</label>
            <p style={{ margin: 0, lineHeight: 1.5 }}>{lead.message}</p>
          </div>
        )}

        {lead.lastContactedAt && (
          <p className="muted" style={{ marginTop: 16 }}>Last contacted {new Date(lead.lastContactedAt).toLocaleString()}</p>
        )}

        <div style={{ marginTop: 24 }}>
          <label>Update status</label>
          <div className="segmented">
            {["new", "contacted", "converted"].map((s) => (
              <button
                key={s}
                className={lead.status === s ? `active ${s}` : ""}
                onClick={() => changeStatus(s)}
                disabled={lead.status === s}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <div className="eyebrow">Follow-up</div>
        <h2 style={{ marginBottom: 16 }}>Notes</h2>

        <form onSubmit={addNote} style={{ marginBottom: 24 }}>
          <textarea rows={3} placeholder="Log a call, email, or meeting…" value={note} onChange={(e) => setNote(e.target.value)} />
          <button className="btn" style={{ marginTop: 10 }}>Add note</button>
        </form>

        {lead.notes.length === 0 ? (
          <p className="muted">No notes yet — add one after your first follow-up.</p>
        ) : (
          <div className="timeline">
            {lead.notes.slice().reverse().map((n) => (
              <div key={n._id} className="timeline-item">
                <div className="timeline-date">{new Date(n.createdAt).toLocaleString()}</div>
                <div className="timeline-text">{n.text}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
