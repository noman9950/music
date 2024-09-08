module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6',
        secondary: '#4B5563',
        background: '#111827',
        'background-light': '#1F2937',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}