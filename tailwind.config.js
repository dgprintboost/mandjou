/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./script.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Chakra Petch"', 'sans-serif'],
      },
      colors: {
        // Palette atelier : noir profond, carbone, rouge de marque
        ink: '#08080A',
        carbon: '#111115',
        steel: '#1C1C22',
        chrome: '#EDEDF0',
        smoke: '#8B8B95',
        brand: '#E30613',
        ember: '#FF3B2F',
      },
      backgroundImage: {
        // Trame carbone : deux hachures croisées très basse opacité
        'carbon-weave':
          'repeating-linear-gradient(45deg, rgba(255,255,255,0.030) 0 1px, transparent 1px 4px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.020) 0 1px, transparent 1px 4px)',
      },
      boxShadow: {
        'glow': '0 0 0 1px rgba(227,6,19,0.35), 0 10px 40px -10px rgba(227,6,19,0.55)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease both',
        'sheen': 'sheen 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        // Reflet qui balaie le wordmark, clin d'oeil au vernis céramique
        sheen: {
          '0%, 100%': { transform: 'translateX(-120%)' },
          '50%': { transform: 'translateX(120%)' },
        },
      },
    },
  },
  plugins: [],
}
