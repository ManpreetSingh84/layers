/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        cust: { max: "1000px" },
        brand: { max: "900px" },
      },
    },
  },
  plugins: [],
};
