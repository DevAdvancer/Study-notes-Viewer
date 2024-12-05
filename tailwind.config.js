/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#9CA3AF',
            h1: {
              color: '#FFFFFF',
            },
            h2: {
              color: '#FFFFFF',
            },
            h3: {
              color: '#FFFFFF',
            },
            h4: {
              color: '#FFFFFF',
            },
            strong: {
              color: '#FFFFFF',
            },
            a: {
              color: '#60A5FA',
              '&:hover': {
                color: '#93C5FD',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    typography
  ],
};
