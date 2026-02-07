import type { Config } from "tailwindcss";

const portfolioConfig: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#000000",
        textMuted: "rgba(255, 255, 255, 0.7)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        display: ["var(--font-dyna-puff)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default portfolioConfig;
