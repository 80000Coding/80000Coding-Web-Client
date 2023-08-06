/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      gray: {
        50: '#F5F5FB',
        100: '#EBEBF2',
        200: '#D9D9D9',
        300: '#AAAAAA',
        500: '#777777',
        600: '#555555',
        700: '#333333',
      },
      green: '#00D287',
      darkgreen: '#00D287',
      blue: '#1C92FF',
      violet: '#9F8FFF',
      red: '#FF4D4D',
      black: '#000000',
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
