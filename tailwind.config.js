/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        call: "0px 8px 20px 0px rgba(80, 81, 249, 0.24)",
      },
    },
  },
  plugins: [],
};
