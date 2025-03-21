import logo from "@/assets/svg/newave-store.svg";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="" className="logo-svg" />
      <span>newave</span>
    </div>
  );
};

export default Logo;
