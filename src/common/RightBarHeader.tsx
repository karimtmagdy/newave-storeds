import { Button } from "@/components";
import { ShoppingBag, Bell, UserCircle } from "lucide-react";
import { useState } from "react";
import DropUserMenu from "./DropUserMenu";
import ToggleSwitchMode from "./toggle/ToggleSwitchMode";
import ToggleSwitchPanel from "./toggle/ToggleSwitchPanel";

const RightBarHeader = () => {
  const [open, setOpen] = useState(true);
  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="right-bar">
      <Button icon={2} shape="rounded">
        <ShoppingBag />
      </Button>
      <Button icon={2} shape="rounded">
        <Bell />
      </Button>
      <ToggleSwitchMode />
      <ToggleSwitchPanel />
      <Button onClick={toggleOpen} icon={2} shape="rounded">
        <UserCircle />
      </Button>
      <DropUserMenu open={open} />
    </div>
  );
};

export default RightBarHeader;
