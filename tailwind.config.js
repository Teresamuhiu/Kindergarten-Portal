module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "var(--primary-bg)",
        primaryText: "var(--primary-text)",
        secondaryBg: "var(--secondary-bg)",
        secondaryText: "var(--secondary-text)",
      },
    },
  },
  plugins: [],
};
