/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        baloo: ['"Baloo 2"', 'cursive'],
        logo: ['"Racing Sans One"', 'sans-serif'],
        alexandria: ['"Alexandria", sans-serif'],
      },
      colors: {
        dustygreen: '#76A79F',
        mintgreen: '#ECF4F3',
        blackish: '#343434',
        lightgray: '#FAFAFA',
        overlaygreen: '#123F45',
        deletered: '#B93127',
      },
      keyframes: {
        'float-x': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-1%)' },
        },
      },
      animation: {
        'float-x': 'float-x 10s ease-in-out infinite',
        'slow-bounce': 'bounce 2s infinite',
        'spin-slow': 'spin 4s linear infinite',
      },
    },
  },
  plugins: [],
};


