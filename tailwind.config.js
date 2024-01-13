/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Roboto :['Roboto', 'sans-serif'],
      },
      colors:{
        'lightGreen':'#C6D0BC',
        'DarkGreen' : '#809B65',
        'lightOrange':'#F6D78B',
        'DarkOrange':'#E0B956',
        'lightBlue':'#A2A7FD',
        'DarkBlue':'#7A80F0',
        'lightPurple':'#A9ADFF',
        'superGray':'#BDBDBD',
      },
    },
  },
  plugins: [],
}

