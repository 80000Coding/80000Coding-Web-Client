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
          dark: {
            100: '#1A1A24',
            200: '#272732',
            300: '#31313E',
            400: '#3C3C47',
            500: '#75757F',
            600: '#9A9AA4',
            700: '#C0C0C8',
            800: '#EAEAF0',
            900: '#F5F5F9',
          },
          light: {
            100: '#F5F5F9',
            200: '#EAEAF0',
            300: '#C0C0C8',
            400: '#9A9AA4',
            500: '#75757F',
            600: '#3C3C47',
            700: '#31313E',
            800: '#272732',
            900: '#1A1A24',
          },
        },
        green: {
          light: '#00D287',
          dark: '#00DF8F',
        },
        blue: {
          light: '#1C92FF',
          dark: '#3DA2FF',
        },
        violet: {
          light: '#9B8AFF',
          dark: '#A495FF',
        },
        red: {
          light: '#FF7562',
          dark: '#FF8676',
        },
        warning: {
          light: '#FFOD2A',
          dark: '#FF3743',
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
  plugins: [
    nextui(),
    plugin(function ({ addVariant }) {
      addVariant('primary', '&.primary')
      addVariant('base', '&.base')
    }),
  ],
}
