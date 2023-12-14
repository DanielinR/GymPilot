import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand: {
          100: "#EBFFFC",
          200: "#C3FBF2",
          300: "#8BF4E7",
          400: "#56E8D5",
          500: "#38D1BD",
          600: "#1EB5A1",
          700: "#0C9987",
          800: "#036457",
          900: "#00443B",
        },
        success: {
          100: "#ECFFEB",
          200: "#C8FBC3",
          300: "#94F48B",
          400: "#62E856",
          500: "#45D138",
          600: "#2BB51E",
          700: "#18990C",
          800: "#0B6303",
          900: "#053D00",
        },
        info: {
          100: "#EBF8FF",
          200: "#C3E6FB",
          300: "#8BCEF4",
          400: "#56B2E8",
          500: "#3899D1",
          600: "#1E7DB5",
          700: "#0C6599",
          800: "#034063",
          900: "#00273D",
        },
        error: {
          100: "#FFEBEB",
          200: "#FBC3C3",
          300: "#F48B8B",
          400: "#E85656",
          500: "#D13838",
          600: "#B51E1E",
          700: "#990C0C",
          800: "#630303",
          900: "#3D0000",
        },
        warning: {
          100: "#FFFFEB",
          200: "#FAFBC3",
          300: "#F3F48B",
          400: "#E5E856",
          500: "#CED138",
          600: "#B2B51E",
          700: "#97990C",
          800: "#626303",
          900: "#3C3D00",
        },
        neutral: {
          100: "#AFAFAF",
          200: "#84888A",
          300: "#535B5F",
          400: "#354146",
          500: "#1B2327",
          600: "#131C21",
          700: "#0D151A",
          800: "#050A0E",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
export default config;
