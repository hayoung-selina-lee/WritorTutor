/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B82F6",
          light: "#b0cefd",
          dark: "#1c57b5",
        },
        secondary: "#6366F1",
        accent: "#8B5CF6",
        background: "#F9FAFB",
        disabled: "#BDBDBD",
      },
      fontFamily: {
        serif: ["Georgia", "serif"], // logo font
      },
    },
  },
  plugins: [],
};
