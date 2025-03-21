import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import { ThemeContextType } from "@/types/IThemeStateType";

const useDarkMode = (): ThemeContextType => {
  const mode = "(prefers-color-scheme: dark)" as string;
  const dark = "dark" as string;
  const mediaType = window.matchMedia(mode).matches;
  const prefersDark = typeof window !== "undefined" ? mediaType : false;
  const [isDark, setIsDark] = useLocalStorage("dark-mode", prefersDark);
  useEffect(() => {
    const root = window.document.documentElement.classList;
    if (isDark) {
      root.add(dark);
    } else {
      root.remove(dark);
    }
  }, [isDark]);

  return {
    isDark,
    theme: isDark ? "dark" : "light",
    toggle: () => setIsDark(!isDark),
  };
};
export default useDarkMode;
