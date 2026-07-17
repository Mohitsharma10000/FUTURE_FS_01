import { useState } from "react";
import { api } from "../services/api";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState({ ok: false, err: "", loading: false });

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ ok: false, err: "", loading: true });
    try {
      await api.submitLead({ ...form, source: "website_contact_form" });
      setStatus({ ok: true, err: "", loading: false });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus({ ok: false, err: err.message, loading: false });
    }
  };

  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <div className="auth-shell">
      <div className="auth-card" style={{ maxWidth: 480 }}>
        <div className="auth-mark" />
        <div className="eyebrow">Contact</div>
        <h1 style={{ marginBottom: 4 }}>Get in touch</h1>
        <p className="muted" style={{ marginBottom: 24 }}>Send an inquiry and our team will follow up shortly.</p>
        <form onSubmit={submit}>
          <div className="field">
            <label>Name</label>
            <input value={form.name} onChange={upd("name")} required maxLength={120} />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" value={form.email} onChange={upd("email")} required />
          </div>
          <div className="field">
            <label>Phone (optional)</label>
            <input value={form.phone} onChange={upd("phone")} maxLength={40} />
          </div>
          <div className="field">
            <label>Message</label>
            <textarea rows={4} value={form.message} onChange={upd("message")} maxLength={5000} />
          </div>
          <button className="btn" style={{ width: "100%" }} disabled={status.loading}>
            {status.loading ? "Sending…" : "Send inquiry"}
          </button>
          {status.ok && <p className="success-msg" style={{ marginTop: 14 }}>Thanks — we'll be in touch soon.</p>}
          {status.err && <p className="error" style={{ marginTop: 14 }}>{status.err}</p>}
        </form>
      </div>
    </div>
  );
}
