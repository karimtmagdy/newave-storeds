import { useAuth } from "@/context/AuthContext";
import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router";

const WelcomeUserPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [countdown, setCountdown] = useState(5);

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);
  return (
    <div>
      <span className="hidden">{countdown}</span>
      welcome {user?.username}
    </div>
  );
};

export default WelcomeUserPage;
