/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "10px",
        sm: "20px",
        md: "30px",
        lg: "50px",
        xl: "100px",
      },
    },
  },
  plugins: [],
};
