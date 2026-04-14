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
        // Peak Automations brand palette
        mint: {
          300: "#5FFAD8",
          400: "#00F5C4",
          500: "#00D9AE",
          600: "#00C49A",
          700: "#009E7B",
          800: "#007A5E",
          900: "#005A45",
          950: "#003A2D",
        },
        brand: {
          blue: "#0077FF",
          teal: "#00F5C4",
          bg: "#080E1A",
          surface: "#0D1526",
          card: "#111827",
        },
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#080E1A",
        },
      },
      fontFamily: {
        sans: ["Syne", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #00F5C4, #0077FF)",
        "brand-gradient-text": "linear-gradient(90deg, #00F5C4, #0077FF)",
      },
    },
  },
  plugins: [],
};

export default config;
