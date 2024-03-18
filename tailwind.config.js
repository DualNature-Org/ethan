/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'Adbanner': "url('/src/images/student/student4.png')",
        'Abbanner': "url('/src/images/student/student1.png')",
        'banner': "url('/src/images/student/student5.png')",
      }
    },
  },
  plugins: [],
}

