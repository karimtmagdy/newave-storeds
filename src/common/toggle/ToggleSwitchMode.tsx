import { Button } from "@/components";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const ToggleSwitchMode = () => {
  const { isDark, toggle } = useTheme();
  return (
    <Button onClick={toggle} icon={2} shape="rounded">
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
};

export default ToggleSwitchMode;
