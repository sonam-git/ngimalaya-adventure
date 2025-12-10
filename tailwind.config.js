/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./contexts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'display': ['Oswald', 'Bebas Neue', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'heading': ['Oswald', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'body': ['Lato', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'sans': ['Lato', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'responsive-xs': ['0.75rem', { lineHeight: '1.4' }],
        'responsive-sm': ['0.875rem', { lineHeight: '1.5' }],
        'responsive-base': ['0.875rem', { lineHeight: '1.5' }],
        'responsive-lg': ['1rem', { lineHeight: '1.6' }],
        'responsive-xl': ['1.125rem', { lineHeight: '1.6' }],
        'responsive-2xl': ['1.25rem', { lineHeight: '1.5' }],
        'responsive-3xl': ['1.5rem', { lineHeight: '1.4' }],
        'responsive-4xl': ['1.875rem', { lineHeight: '1.3' }],
        'responsive-5xl': ['2.25rem', { lineHeight: '1.2' }],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'blob': 'blob 7s infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
}
