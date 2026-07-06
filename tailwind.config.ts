import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black2: '#1C1C1C',
        lime: '#C6FF00',
        'lime-light': '#E6FF5C',
      },
      fontFamily: {
        cinzel: ['var(--font-cinzel)', 'serif'],
        bebas: ['var(--font-bebas)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      maxWidth: {
        container: '1120px',
      },
      keyframes: {
        'ticker-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'wa-pulse': {
          '0%': {
            boxShadow:
              '0 6px 20px rgba(0,0,0,0.45), 0 0 0 0 rgba(37,211,102,0.55)',
          },
          '70%': {
            boxShadow:
              '0 6px 20px rgba(0,0,0,0.45), 0 0 0 14px rgba(37,211,102,0)',
          },
          '100%': {
            boxShadow:
              '0 6px 20px rgba(0,0,0,0.45), 0 0 0 0 rgba(37,211,102,0)',
          },
        },
      },
      animation: {
        ticker: 'ticker-scroll 26s linear infinite',
        'wa-pulse': 'wa-pulse 2.6s infinite',
      },
    },
  },
  plugins: [],
};

export default config;
