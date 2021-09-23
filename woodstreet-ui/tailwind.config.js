module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        fadeInTranslate: 'fadeInTranslate 200ms ease-in-out',
        fadeOutTranslate: 'fadeOutTranslate 200ms ease-in-out',
      },
      colors: {
        link: {
          light: 'rgba(25, 144, 198, 0.08)',
          DEFAULT: '#1990c6',
        },
        primary: {
          light: 'rgba(41, 41, 41, 0.1)',
          backgroundActive: 'rgba(41, 41, 41, 0.8)',
          placeholder: 'rgba(41, 41, 41, 0.08)',
          DEFAULT: '#292929',
        },
        secondary: {
          light: 'rgba(245, 212, 97, 0.8)',
          veryLight: 'rgba(245, 212, 97, 0.2)',
          DEFAULT: '#f5d461',
        },
      },
      fontSize: {
        '4.5xl': [
          '40px',
          {
            lineHeight: '3rem',
          },
        ],
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
      inset: {
        '4%': '4%',
        '-4%': '-4%',
        '8%': '8%',
        '-8%': '-8%',
      },
      keyframes: {
        fadeInTranslate: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          // '50%': { transform: 'translateY(50%)', opacity: 0.5 },
          '100%': { transform: 'translateY(0%)', opacity: 1 },
        },
        fadeOutTranslate: {
          '0%': { transform: 'translateY(0%)', opacity: 1 },
          // '50%': { transform: 'translateY(50%)', opacity: 0.5 },
          '100%': { transform: 'translateY(100%)', opacity: 0 },
        },
      },
      padding: {
        '4%': '4%',
      },
    },
  },
  variants: {
    extend: {
      fill: ['hover', 'focus'],
      stroke: ['hover', 'focus'],
    },
  },
  plugins: [],
};
