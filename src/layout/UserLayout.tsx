import { Outlet } from "react-router";
import Logo from "@/common/Logo";
import RightBarHeader from "@/common/RightBarHeader";

const UserLayout = () => {
  return (
    <div>
      <header>
        <div className="contaienr">
          <Logo />
          <RightBarHeader />
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default UserLayout;
