/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ecf4fd",
          100: "#dfedfc",
          200: "#b9ddf8",
          300: "#81c2f3",
          400: "#42a7eb",
          500: "#1a87d5",
          600: "#106fb7",
          700: "#0d5691",
          800: "#0e4877",
          900: "#0f3e66",
        },
        "primary-dark": {
          900: "#d3e9fd",
          800: "#d8ebfd",
          700: "#badffd",
          600: "#7ec5fb",
          500: "#3da8fa",
          400: "#0582f0",
          300: "#0363c4",
          200: "#024ca2",
          100: "#013e89",
          50: "#00337a",
        },
        secondary: {
          50: "#eeffef",
          100: "#d7ffdb",
          200: "#b1ffba",
          300: "#74ff85",
          400: "#31f749",
          500: "#06e122",
          600: "#00bb17",
          700: "#03a318",
          800: "#087317",
          900: "#095e16",
        },
        "secondary-dark": {
          900: "#ffffff",
          800: "#e5ffe8",
          700: "#c2ffc9",
          600: "#85ff93",
          500: "#3ff855",
          400: "#06ef25",
          300: "#00cc18",
          200: "#04b41b",
          100: "#098119",
          50: "#0a6b19",
        },
        warning: {
          50: "#fef5ee",
          100: "#fde7d7",
          200: "#fbccad",
          300: "#f7a87a",
          400: "#f37944",
          500: "#f05b26",
          600: "#e13d15",
          700: "#ba2c14",
          800: "#942518",
          900: "#782116",
        },
        "warning-dark": {
          900: "#ffffff",
          800: "#fef7f0",
          700: "#fcddc5",
          600: "#f9b890",
          500: "#f58a5c",
          400: "#f26d40",
          300: "#eb4524",
          200: "#d02816",
          100: "#ab211c",
          50: "#8e1e1a",
        },
      },
    },
  },
  plugins: [],
};
