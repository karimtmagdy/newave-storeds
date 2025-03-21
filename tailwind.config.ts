// import debugScreens from "tailwindcss-debug-screens";

// const debugScreen =
//   process.env.NODE_ENV === "development" ? debugScreens : null;
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        general: ["General Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  // plugins: [...(debugScreen ? [debugScreen] : [])],
};
