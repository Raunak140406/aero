/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          darkest: '#0f172a',
          darker: '#1e293b',
          dark: '#334155',
          DEFAULT: '#475569',
          light: '#64748b',
          lighter: '#94a3b8',
          lightest: '#cbd5e1',
        },
        nebula: {
          purple: '#7e22ce',
          blue: '#4338ca',
          teal: '#0f766e',
          pink: '#db2777',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(to right, #4338ca, #7e22ce)',
      }
    },
  },
  plugins: [],
};