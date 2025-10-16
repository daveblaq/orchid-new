/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Disable automatic dark mode detection
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#2596be",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        green: {
          50: "#f7fdf7",
          100: "#eaf7e9",
          200: "#d5efd2",
          300: "#bae2b6",
          400: "#9dd094",
          500: "#609233",
          600: "#4f7a2a",
          700: "#406221",
          800: "#344d1c",
          900: "#2c3f18",
        },
        accent: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#4caf50",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        text: {
          primary: "#1f2937",
          secondary: "#6b7280",
          light: "#9ca3af",
        },
      },
    },
  },
  plugins: [],
};
