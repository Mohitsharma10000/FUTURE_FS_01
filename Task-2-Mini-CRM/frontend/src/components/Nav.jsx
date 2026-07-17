import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { api } from "../services/api";
import Logomark from "./Logomark";

export default function Nav() {
  const { user, logout } = useAuth();
  const nav = useNavigate();
  const [adminExists, setAdminExists] = useState(true);

  useEffect(() => {
    if (!user) api.setupStatus().then((s) => setAdminExists(s.adminExists)).catch(() => {});
  }, [user]);

  return (
    <div className="nav">
      <div className="nav-left">
        <Link to="/" className="brand">
          <span className="brand-mark"><Logomark /></span>
          Lead Desk
        </Link>
        {user && (
          <NavLink to="/dashboard" className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>
            Leads
          </NavLink>
        )}
      </div>
      <div className="nav-right">
        {user ? (
          <>
            <span className="nav-user">{user.email}</span>
            <button className="btn ghost sm" onClick={async () => { await logout(); nav("/login"); }}>
              Log out
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Log in</Link>
            {!adminExists && <Link to="/register" className="btn sm">Register</Link>}
          </>
        )}
      </div>
    </div>
  );
}
