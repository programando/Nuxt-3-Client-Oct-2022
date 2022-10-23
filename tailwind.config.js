/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
         Montserrat: ['Montserrat'],
         Raleway   : ['Raleway'],
       },
 
       fontSize: {
         'lowerxxs': '.45rem',
         'lowerxs' : '.55rem',
         'text-sm' : '0.75rem',
         'upperxs' : '.65rem',
       },
 
       lineHeight: {
         'leading-2': '.80rem',
         'leading-1': '.60rem',
        },
       //azul              : '#20286d'
       colors: {
         amarillo          : '#FFFD7C',
         azul              : '#002C76',
         azulBackGroundForm: '#16182f',
         azulClaro         : '#286090',
         celeste           : '#2E9AFE',
         celesteClaro      : '#00b4e9',
         gris              : '#EAEAEA',
         rojo              : '#FF0000',
         verde             : '#1EFF37',
         verdeOscuro       : '#008f39',
         calendarioAmarillo: '#FCFCE5',
         calendarioVerde   : '#8DFB41'
       },
       
      
     },
  },
  plugins: [],
}
