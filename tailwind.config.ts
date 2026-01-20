import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0056b3",
          dark: "#004494",
        },
        secondary: {
          DEFAULT: "#f48c06",
          dark: "#e85d04",
        },
      },
    },
  },
  plugins: [],
};
export default config;
