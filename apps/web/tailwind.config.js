/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      gray: {
        100: '#FAFAFF',
        200: '#EBEBF2',
        300: '#D8D9E0',
        400: '#B4B5BD',
        500: '#777777',
        600: '#555968',
        700: '#3A3F57',
        800: '#252946',
        900: '#161A3A',
      },
      green: {
        light: '#2EEFAA',
        DEFAULT: '#00D287',
        dark: '#00B372',
      },
      blue: {
        light: '#75BDFF',
        DEFAULT: '#1C92FF',
        dark: '#006DD1',
      },
      violet: {
        light: '#C1B7FF',
        DEFAULT: '#9F8FFF',
        dark: '#7A68E3',
      },
      red: {
        light: '#FFA8A8',
        DEFAULT: '#FF8787',
        dark: '#C93939',
      },
    },
    fontSize: {
      '2xl': '32px',
      sm: '11px',
      base: '12px',
      lg: '14px',
      xl: '17px',
      xs: '10px',
      default: '16px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}