/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#059212',
          light: '#06D001',
          lighter: '#9BEC00',
          lightest: '#F3FF90',
        },
        secondary: {
          DEFAULT: 'rgb(5, 146, 18)',
          light: 'rgb(6, 208, 1)',
          lighter: 'rgb(155, 236, 0)',
          lightest: 'rgb(243, 255, 144)',
        },
      },
      backgroundImage: theme => ({
        'primary-gradient': 'linear-gradient(to bottom, #F3FF90, #059212)',
      }),
    },
  },
  plugins: [],
};
