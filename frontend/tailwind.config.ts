import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        stadium: '#07162f',
        pitch: '#17c964',
        mint: '#a7f3d0',
      },
      boxShadow: {
        glow: '0 0 40px rgba(23, 201, 100, 0.25)',
      },
    },
  },
  plugins: [],
} satisfies Config;
