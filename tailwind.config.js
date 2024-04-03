/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem',
      },
      backgroundImage: {
        'Adbanner': "url('/src/images/student/student4.png')",
        'Abbanner': "url('/src/images/student/student1.png')",
        'pbanner': "url('/src/images/parent.jpg')",
        // 'bann': "url('/src/images/blob-scatter-haikei.png')",
        'bann': "url('/src/images/yellow.svg')",
        'banner': "url('/src/images/student/student5.png')",
        'banner2': "url('/src/images/student/student9.png')",
      }
    },
  },
  plugins: [],
}