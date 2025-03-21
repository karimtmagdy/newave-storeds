import { useAuth } from "@/context/AuthContext";
import { useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  useEffect(() => {
    if (isAuthenticated && !user?.role.includes("admin")) {
      navigate("/forbidden", { replace: true });
    } else if (!isAuthenticated) {
      navigate("/unauthorized", { replace: true });
    } else if (user && user.role === "admin") {
      navigate("/admin", { replace: true });
    }
  }, [isAuthenticated, navigate, user]);
  return children;
};

export default PrivateRoute;
