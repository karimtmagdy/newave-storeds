import { Button } from "@/components";
import { useAuth } from "@/context/AuthContext";
import { SIGNINAPI } from "@/services/api/api";
import { Home, LogOut, Settings } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { createElement } from "react";

const dropMenuBar = [
  { name: "profile", to: "account/profile", icon: Home },
  { name: "support", to: "support", icon: Home },
  { name: "settings", to: "settings", icon: Settings },
];
const UserMenu = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user) {
      logout();
      navigate(SIGNINAPI);
    }
  };

  return (
    <>
      {dropMenuBar.map(({ name, to, icon }) => {
        return (
          <li key={name}>
            <Link to={to}>
              {createElement(icon)}
              {name}
            </Link>
          </li>
        );
      })}
      <li>
        <form onSubmit={onSubmit}>
          <Button fullWidth className="justify-start px-2" size="md">
            <LogOut /> logout
          </Button>
        </form>
      </li>
    </>
  );
};

export default UserMenu;
