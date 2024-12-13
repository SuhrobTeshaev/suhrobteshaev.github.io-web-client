/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       screens: {
        'bigMobile': '500px', // для экранов с минимальной шириной 500px
        'tablet': '600px', // для экранов с минимальной шириной 600px
      },
    },
  },
  plugins: [],
};
