import type { Config } from "tailwindcss";

const portfolioConfig: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kvinPrimary: "#4f46e5",
        kvinSecondary: "#06b6d4",
        kvinAccent: "#f59e0b",
      },
      fontFamily: {
        kvinDisplay: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default portfolioConfig;
