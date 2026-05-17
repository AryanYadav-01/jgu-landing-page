/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0f',
        paper: '#f5f0e8',
        cream: '#ede8d8',
        gold: '#c9a84c',
        'gold-light': '#e8c96a',
        rust: '#b84c2a',
        teal: '#1a5f6e',
        'teal-light': '#2a8a9e',
        light: '#faf8f3',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        dmSans: ['DM Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      animation: {
        float1: 'float1 6s ease-in-out infinite',
        float2: 'float2 7s ease-in-out infinite',
        pulse2: 'pulse2 2s infinite',
        marquee: 'marquee 22s linear infinite',
      },
      keyframes: {
        float1: {
          '0%, 100%': { transform: 'rotate(3deg) translateY(0)' },
          '50%': { transform: 'rotate(3deg) translateY(-14px)' },
        },
        float2: {
          '0%, 100%': { transform: 'rotate(-2deg) translateY(0)' },
          '50%': { transform: 'rotate(-2deg) translateY(-10px)' },
        },
        pulse2: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.85)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
