import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { api } from "../services/api";

export default function RegisterPage() {
  const { register } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const [adminExists, setAdminExists] = useState(false);

  useEffect(() => {
    api.setupStatus()
      .then((s) => setAdminExists(s.adminExists))
      .catch(() => setAdminExists(false))
      .finally(() => setChecking(false));
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      await register(email, password);
      nav("/dashboard");
    } catch (e2) {
      setErr(e2.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-shell">
      <div className="auth-card">
        <div className="auth-mark" />

        {checking ? (
          <p className="muted">Checking setup status…</p>
        ) : adminExists ? (
          <>
            <div className="eyebrow">Registration closed</div>
            <h1 style={{ marginBottom: 4 }}>Admin already set up</h1>
            <p className="muted" style={{ marginBottom: 8 }}>
              This CRM already has an admin account. This is a single-admin system, so new sign-ups are disabled.
            </p>
            <p className="muted" style={{ marginBottom: 20 }}>
              If you need access, ask your admin to log in and share leads with you directly.
            </p>
            <Link to="/login" className="btn" style={{ width: "100%", textAlign: "center", display: "block" }}>
              Go to login
            </Link>
          </>
        ) : (
          <>
            <div className="eyebrow">Get started</div>
            <h1 style={{ marginBottom: 4 }}>Create the admin account</h1>
            <p className="muted" style={{ marginBottom: 24 }}>
              This is a one-time setup. Only one admin account can be created.
            </p>
            <form onSubmit={submit}>
              <div className="field">
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoFocus />
              </div>
              <div className="field">
                <label>Password (min 8 chars)</label>
                <input type="password" minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <button className="btn" style={{ width: "100%" }} disabled={loading}>
                {loading ? "Creating…" : "Create admin account"}
              </button>
              {err && <p className="error" style={{ marginTop: 14 }}>{err}</p>}
            </form>
            <p className="muted" style={{ marginTop: 20 }}>
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
