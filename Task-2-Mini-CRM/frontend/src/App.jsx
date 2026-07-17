import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import LeadDetailPage from "./pages/LeadDetailPage";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute><DashboardPage /></ProtectedRoute>}
        />
        <Route
          path="/leads/:id"
          element={<ProtectedRoute><LeadDetailPage /></ProtectedRoute>}
        />
        <Route path="*" element={
          <div className="container">
            <div className="empty-state">
              <div className="eyebrow">404</div>
              <h2>Page not found</h2>
              <p className="muted">The page you're looking for doesn't exist.</p>
            </div>
          </div>
        } />
      </Routes>
    </>
  );
}
