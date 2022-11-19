/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('../images/mobile/image-header.jpg')",
        'cherry': "url('../images/mobile/image-graphic-design.jpg')",
        'fruit': "url('../images/mobile/image-photography.jpg')",
        'computerHeader': "url('../images/desktop/image-header.jpg')",
        'cherryComputer':"url('../images/desktop/image-graphic-design.jpg')",
        'fruitComputer':"url('../images/desktop/image-photography.jpg')",
      } ,
     
      fontFamily:  {
        'barlow': ['Barlow', 'sans-serif'],
        'fraunces': ['Fraunces','sans-serif']
      },
  
    },
  },
  plugins: [],
}
