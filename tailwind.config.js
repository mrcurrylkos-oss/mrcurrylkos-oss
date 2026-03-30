/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium Dark Gold Theme
        bg: '#0a0702',        // Very dark brown/black background
        surface: '#171105',   // Slightly lighter warm surface
        'surface-hover': '#241a08', // Hover state
        primary: '#f59e0b',   // Bright Gold (Tailwind amber-500)
        secondary: '#d97706', // Darker Gold for accents (Tailwind amber-600)
        text: '#fef3c7',      // Off-white/gold for text
        'text-muted': '#fcd34d', // Muted gold text
        border: '#38280a',    // Dark gold border
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
