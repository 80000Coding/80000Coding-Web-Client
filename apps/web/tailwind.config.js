/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // packages/ui 패키지를 위한 임시 경로 추가
    '../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
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
        warning: '#FF3F3F',
        dark: '#FF3F3F',
      },
    },
    fontSize: {
      '2xl': '20px',
      sm: '11px',
      base: '12px',
      lg: '14px',
      xl: '17px',
      xs: '10px',
    },
    lineHeight: {
      DEFAULT: 1,
      A: 1.55,
      B: 1.7,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'spin-with-delay': 'spin-quarter 2s ease-out infinite forwards',
      },
      keyframes: {
        'spin-quarter': {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(90deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '75%': { transform: 'rotate(270deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [nextui()],
}
