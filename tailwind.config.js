/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        // lightmode colors
        'primary':'#FFFFFF',
        'secondary':'#F6F8FA',
        'text':'#757575',
        'heading':'#2A2A2A',
        'accent':'#0056B2',
        // dark mode colors
        'primary-dark':'#1B1B1E',
        'secondary-dark':'#1E1E1E',
        'text-dark':'#757575',
        'heading-dark':'#BABABA',
        'accent-dark':'#8AB4F8',
      }
    },
  },
  plugins: [],
}

