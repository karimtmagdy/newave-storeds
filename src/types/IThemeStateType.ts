export type Theme = "light" | "dark";
export type ThemeContextType = {
  theme?: Theme;
  isDark: boolean;
  toggle: () => void;
};
