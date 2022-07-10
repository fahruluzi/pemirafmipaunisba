/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondary': '#F8C511',
        'alert-warning-background' : '#FEF5E2',
        'card' : 'rgba(245, 245, 245, 0.7)',
        'primary' : '#004495',
        'primary-darker' : '#002D63',
      },
      boxShadow: {
        "count" : '1px 7px 5px rgba(0, 0, 0, 0.7)',
        "choose" : '1px 5px 7px #004495',
      }
    },
    fontFamily: {
      'poppins' : ['Poppins', "Open Sans", '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif']
    }
  },
  plugins: [],
}
