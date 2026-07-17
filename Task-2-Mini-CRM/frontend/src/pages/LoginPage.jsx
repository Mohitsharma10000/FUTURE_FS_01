import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { api } from "../services/api";

export default function LoginPage() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [adminExists, setAdminExists] = useState(true);

  useEffect(() => {
    api.setupStatus().then((s) => setAdminExists(s.adminExists)).catch(() => {});
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      await login(email, password);
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
        <div className="eyebrow">Admin access</div>
        <h1 style={{ marginBottom: 4 }}>Welcome back</h1>
        <p className="muted" style={{ marginBottom: 24 }}>Log in to view and manage your leads.</p>
        <form onSubmit={submit}>
          <div className="field">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoFocus />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button className="btn" style={{ width: "100%" }} disabled={loading}>
            {loading ? "Logging in…" : "Log in"}
          </button>
          {err && <p className="error" style={{ marginTop: 14 }}>{err}</p>}
        </form>
        {!adminExists && (
          <p className="muted" style={{ marginTop: 20 }}>
            No account? <Link to="/register">Register</Link> — the first user becomes admin.
          </p>
        )}
      </div>
    </div>
  );
}
