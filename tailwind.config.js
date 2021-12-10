const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
};
