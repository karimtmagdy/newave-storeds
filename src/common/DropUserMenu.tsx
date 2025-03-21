import { Link } from "react-router";
import UserMenuInformation from "./UserMenuInformation";
import { useAuth } from "@/context/AuthContext";
import UserMenu from "./UserMenu";
import { SIGNINAPI, SIGNUPAPI } from "@/services/api/api";

const DropUserMenu = ({ open }: { open: boolean }) => {
  const { user } = useAuth();
  return (
    <>
      {open && (
        <template
          className={user ? "w-52" : "w-44 **:w-full **:justify-center"}
        >
          <>
            {user && <UserMenuInformation />}
            <ul>
              {user ? (
                <UserMenu />
              ) : (
                <>
                  <li>
                    <Link to={SIGNINAPI}>LOGIN</Link>
                  </li>
                  <li>
                    <Link to={SIGNUPAPI}>REGISTER</Link>
                  </li>
                </>
              )}
            </ul>
          </>
        </template>
      )}
    </>
  );
};

export default DropUserMenu;
