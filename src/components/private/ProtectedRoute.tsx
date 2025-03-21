import { useAuth } from "@/context/AuthContext";
import { useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router";
const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
      console.log("is user", isAuthenticated, user);
    }
  }, [isAuthenticated, navigate, user]);
  return children;
};

export default ProtectedRoute;
