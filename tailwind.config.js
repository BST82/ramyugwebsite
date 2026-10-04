/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Jumeirah-Inspired Luxury Light Colors
        jumeirah: {
          white: '#FFFFFF',       // Main Pristine Background
          pearl: '#F9F8F6',       // Secondary Pearl/Sand Background
          gold: '#C5A059',        // Primary Champagne Gold Accent
          goldDark: '#B89D5E',    // Deep Champagne Gold
          charcoal: '#2C2C2C',    // Deep Charcoal Body Text
          border: '#E5E5E5',      // Subtle Light Grey / Gold Border
        },
        // Warm Luxury Dark Theme (Warm Espresso & Roasted Mocha - ZERO Blue, ZERO Pure Black)
        warmDark: {
          bg: '#1A1815',          // Deep Warm Espresso (Warm velvety background)
          card: '#26221E',        // Roasted Mocha Card Background
          elevated: '#332D28',    // Elevated Bronze Container
          border: '#3D362F',      // Warm Bronze Gold Border
          text: '#FAF6F0',        // Soft Warm Ivory Linen Text
          muted: '#D6CCC0',       // Warm Sand Muted Text
        },
        gold: {
          50: '#FAF6E6',
          100: '#F4E9C0',
          200: '#E8D48D',
          300: '#DCC05A',
          400: '#D7B442',
          500: '#C5A059', // Champagne Gold
          600: '#B89D5E', // Deep Champagne Gold
          700: '#9B7B38',
          800: '#755A25',
          900: '#4D3A15',
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E6E6E6',
          200: '#CCCCCC',
          500: '#666666',
          700: '#3D3D3D',
          800: '#2C2C2C',
          900: '#1A1815',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 10px 30px -10px rgba(197, 160, 89, 0.3)',
        'luxury': '0 20px 40px -15px rgba(38, 34, 30, 0.12)',
      }
    },
  },
  plugins: [],
};
