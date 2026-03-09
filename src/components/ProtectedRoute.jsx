import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const session = JSON.parse(localStorage.getItem("session"));

  if (!session) {
    return <Navigate to="/login" />;
  }

  const currentTime = new Date().getTime();

  if (currentTime > session.expiry) {
    localStorage.removeItem("session");
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;