import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate, Outlet } from "react-router-dom";

const GuestRoute = () => {
  const { token, user, loading } = useContext(UserContext);

  if (loading) return null;

  if (token && user) {
    switch (user.role) {
      case "seeker":
        return <Navigate to="/jobs" replace />;
      case "recruiter":
        return <Navigate to="/recruiter-dashboard" replace />;
      case "admin":
        return <Navigate to="/admin-dashboard" replace />;
      default:
        return <Navigate to="/" replace />;
    }
  }

  return <Outlet />;
};

export default GuestRoute;
