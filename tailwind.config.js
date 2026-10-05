/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Jumeirah-Inspired Luxury Editorial Warm Cream & Stone Colors
        cream: {
          50: '#FDFBF7',
          100: '#FAF7F2', // Signature Warm Cream Base
          200: '#F4EFE6', // Editorial Warm Card Surface
          300: '#ECE5D8', // Warm Sand Divider
          400: '#E2D7C5',
          500: '#D5C7B0',
        },
        jumeirah: {
          cream: '#FAF7F2',       // Warm Cream Background (replaces standard white)
          card: '#F4EFE6',        // Soft Alabaster Card Background
          pearl: '#F8F5F0',       // Pearl Sand Tint
          gold: '#B89358',        // Refined Editorial Champagne Bronze
          goldDark: '#9E7B3E',    // Deep Rich Bronze Accent
          goldLight: '#D1B27C',   // Luminous Gold Accent
          charcoal: '#1D1C1A',    // High-Contrast Dark Espresso Text
          muted: '#6E6962',       // Refined Muted Editorial Text
          border: '#E5DFD5',      // Subtle Warm Sand Neutral Border
        },
        editorial: {
          dark: '#1D1C1A',
          muted: '#6E6962',
          border: '#E5DFD5',
        },
        // Warm Luxury Dark Theme (Warm Roasted Espresso & Mocha)
        warmDark: {
          bg: '#141311',          // Velvet Espresso Deep Background
          card: '#1E1B18',        // Mocha Atelier Card Background
          elevated: '#292521',    // Elevated Container
          border: '#2F2B26',      // Subtle Warm Charcoal Border
          text: '#FAF7F2',        // Warm Linen Cream Text
          muted: '#C8C0B5',       // Warm Muted Sand Text
        },
        gold: {
          50: '#FBF8F0',
          100: '#F6EEDB',
          200: '#EBDCB7',
          300: '#DFCA93',
          400: '#CBAB6E',
          500: '#B89358', // Champagne Gold / Bronze
          600: '#9E7B3E', // Deep Bronze
          700: '#7E602F',
          800: '#5F4620',
          900: '#3D2C12',
        },
        charcoal: {
          50: '#F6F5F4',
          100: '#EBE9E6',
          200: '#D6D2CC',
          500: '#6E6962',
          700: '#3A3632',
          800: '#24221F',
          900: '#1D1C1A',
        }
      },
      fontFamily: {
        serif: ['"Bressay Display"', '"Old Standard TT"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Montserrat"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle-luxury': '0 10px 30px -10px rgba(29, 28, 26, 0.06)',
        'luxury': '0 20px 45px -15px rgba(29, 28, 26, 0.08)',
        'gold-subtle': '0 10px 25px -10px rgba(184, 147, 88, 0.25)',
      }
    },
  },
  plugins: [],
};
