import FieldInputsRegister from "@/common/atoms/FieldInputsRegister";
import { useAuth } from "@/context/AuthContext";
import { SIGNINAPI, SIGNUPAPI } from "@/services/api/api";
import { useState } from "react";
import { useNavigate } from "react-router";
import HaveAccount from "./HaveAccount";

const RegisterPage = () => {
  const { user, register } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) {
      register(username, email, password, confirmPassword);
      navigate(SIGNINAPI);
    } else if (user) {
      navigate(SIGNUPAPI);
    }
  };

  return (
    <div className="authentication-form-page">
      <form onSubmit={onSubmit}>
        <div>
          <h1>Register Page</h1>
        </div>
        <FieldInputsRegister
          setUsername={setUsername}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
        />
        <HaveAccount />
        <button className="px-2">register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
