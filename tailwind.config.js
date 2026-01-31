/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#0a0e27",
          800: "#121742",
          700: "#1a1f5c",
          600: "#222876",
          500: "#2a3190",
        },
        accent: {
          cyan: "#00d4ff",
          green: "#00ff88",
        },
        stellar: {
          blue: "#7b16ff",
          purple: "#5c2dd5",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
