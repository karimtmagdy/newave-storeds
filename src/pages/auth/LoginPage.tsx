// import { Input } from "@/components";
import FieldInputsLogin from "@/common/atoms/FieldInputsLogin";
import { useAuth } from "@/context/AuthContext";
import { SIGNINAPI } from "@/services/api/api";
import { useState } from "react";
import { useNavigate } from "react-router";
import HaveAccount from "./HaveAccount";

const LoginPage = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isAuthenticated) {
      login(email, password);
      navigate("/");
    } else if (isAuthenticated) {
      navigate(SIGNINAPI);
    }
  };

  return (
    <div className="authentication-form-page">
      <form onSubmit={onSubmit}>
        <div>
          <h1>Login Page</h1>
        </div>

        <FieldInputsLogin setEmail={setEmail} setPassword={setPassword} />
        <HaveAccount />
        <button className="px-2">login</button>
      </form>
    </div>
  );
};

export default LoginPage;
