export default {
  darkMode: "class", // use class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: 'var(--accent-color)', // ✅ add this line
      },
    },
  },
  plugins: [],
};
