/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react')

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // packages/ui 패키지를 위한 임시 경로 추가
    '../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      '3xl': '22px',
      '2xl': '20px',
      xl: '18px',
      lg: '16px',
      base: '14px',
      sm: '12px',
      xs: '10px',
    },
    lineHeight: {
      DEFAULT: 1,
      A1: 1.4,
      A2: 1.5,
      A3: 1.55,
      A4: 1.6,
      B: 1.85,
    },
    extend: {
      animation: {
        'spin-with-delay': 'spin-quarter 2s ease-out infinite forwards',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        gray: {
          dark: {
            100: 'var(--dark-color-gray-100)',
            200: 'var(--dark-color-gray-200)',
            300: 'var(--dark-color-gray-300)',
            400: 'var(--dark-color-gray-400)',
            500: 'var(--dark-color-gray-500)',
            600: 'var(--dark-color-gray-600)',
            700: 'var(--dark-color-gray-700)',
            800: 'var(--dark-color-gray-800)',
            900: 'var(--dark-color-gray-900)',
          },
          light: {
            100: 'var(--light-color-gray-100)',
            200: 'var(--light-color-gray-200)',
            300: 'var(--light-color-gray-300)',
            400: 'var(--light-color-gray-400)',
            500: 'var(--light-color-gray-500)',
            600: 'var(--light-color-gray-600)',
            700: 'var(--light-color-gray-700)',
            800: 'var(--light-color-gray-800)',
            900: 'var(--light-color-gray-900)',
          },
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
        },
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
