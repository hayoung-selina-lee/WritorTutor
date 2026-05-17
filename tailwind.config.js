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
        feedbackcard: {
          num: {
            bg: "#F3F4F6",
            border: "#D1D5DB",
            text: "#6B7280",
          },
          wrong: {
            bg: "#FCEBEB",
            text: "#E24B4A",
          },
          suggestion: {
            bg: "#EAF3DE",
            text: "#3B6D11",
          },
          encouragement: {
            bg: "#EAF3DE",
            text: "#27500A",
          },
        },
      },
      fontFamily: {
        serif: ["Georgia", "serif"], // logo font
      },
    },
  },
  plugins: [],
};
