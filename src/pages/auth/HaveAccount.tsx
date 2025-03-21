import { SIGNINAPI, SIGNUPAPI } from "@/services/api/api";
import { Link, useLocation } from "react-router";

const HaveAccount = () => {
  const location = useLocation();
  return (
    <p className="space-x-1">
      <span className="text-zinc-600">
        {location.pathname === SIGNUPAPI
          ? "do you have an account?"
          : "do not have an account?"}
      </span>
      <Link
        to={location.pathname === SIGNUPAPI ? SIGNINAPI : SIGNUPAPI}
        className="text-blue-500 hover:text-blue-700"
      >
        {location.pathname === SIGNUPAPI ? "sign in" : "sign up"}
      </Link>
    </p>
  );
};

export default HaveAccount;
