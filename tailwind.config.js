/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
       'starry': "url('/starry.gif')",
       'starry2': "url('/starry2.gif')"
      },
      screens:{
       'iphone': '431px',
       'oppo': '321px'
      }
    },
  },
  plugins: [],
}

