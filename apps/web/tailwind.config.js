/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react')
const plugin = require('tailwindcss/plugin')

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
      largeTitle: '22px',
      title: '20px',
      subTitle: '18px',
      body: '16px',
      subBody: '14px',
      note: '12px',
      caption: '10px',
    },
    fontWeight: {
      bold: 700,
      medium: 500,
      regular: 400,
    },
    lineHeight: {
      DEFAULT: 150,
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
          100: 'var(--pc-color-gray-100)',
          200: 'var(--pc-color-gray-200)',
          300: 'var(--pc-color-gray-300)',
          400: 'var(--pc-color-gray-400)',
          500: 'var(--pc-color-gray-500)',
          600: 'var(--pc-color-gray-600)',
          700: 'var(--pc-color-gray-700)',
          800: 'var(--pc-color-gray-800)',
          900: 'var(--pc-color-gray-900)',
        },
        green: 'var(--pc-color-green)',
        blue: 'var(--pc-color-blue)',
        violet: 'var(--pc-color-violet)',
        red: 'var(--pc-color-red)',
        warning: 'var(--pc-color-warning)',
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
  plugins: [
    nextui(),
    plugin(function ({ addVariant }) {
      addVariant('primary', '&.primary')
      addVariant('base', '&.base')
    }),
  ],
}
