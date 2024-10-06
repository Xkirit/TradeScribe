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
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
        },
      },
      // backgroundImage: theme => ({
      //   'primary-gradient': 'linear-gradient(to bottom, #059212, #F3FF90)',
      //   'navbar-gradient': 'linear-gradient(to bottom, #F3FF90, #06D001)',
      //   'secondary-gradient': 'linear-gradient(to bottom, #06D001, #F3FF90)',
      //   'dark-mode': 'linear-gradient(to bottom, #06D001, #212121)',
      // }),
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'poppins' : ['Poppins','serif'],

      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
