/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'Adbanner': "url('/src/images/student/student4.png')",
        'Abbanner': "url('/src/images/student/student1.png')",
        'pbanner': "url('/src/images/parent.jpg')",
        'banner': "url('/src/images/student/student5.png')",
        'banner2': "url('/src/images/student/student9.png')",
      }
    },
  },
  plugins: [],
}

