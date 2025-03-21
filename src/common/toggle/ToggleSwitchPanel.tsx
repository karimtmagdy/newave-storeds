import { useLocation, useNavigate } from "react-router";
import { useAuth } from "@/context/AuthContext";
import Button from "@/components/ui/button";
import { Shield, Home } from "lucide-react";
const ToggleSwitchPanel = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const switchAdmin = () => {
    if (location.pathname === "/") {
      navigate("/admin", { replace: true });
    } else if (location.pathname.includes("/admin")) {
      navigate("/", { replace: true });
    }
  };
  return (
    <>
      {user && user.role === "admin" && (
        <Button icon={2} shape="rounded" onClick={switchAdmin}>
          {location.pathname.includes("/admin") ? <Home /> : <Shield />}
        </Button>
      )}
    </>
  );
};

export default ToggleSwitchPanel;
