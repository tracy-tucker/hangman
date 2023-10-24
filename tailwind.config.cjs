/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#ebebe8',
      green: {
        100: '#d1e2c4',
        300: '#778a35',
        500: '#31352e',
      },
    },
    extend: {},
  },
  plugins: [],
};
