import useDarkMode from "@/hooks/useDarkMode";
import { ThemeContextType } from "@/types/IThemeStateType";
import { createContext, type ReactNode, useContext } from "react";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { isDark, toggle, theme } = useDarkMode();
  const initial: ThemeContextType = { isDark, toggle, theme };
  return (
    <ThemeContext.Provider value={initial}>{children}</ThemeContext.Provider>
  );
};
export const useTheme = () => {
  const context = useContext(ThemeContext) as ThemeContextType;
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
