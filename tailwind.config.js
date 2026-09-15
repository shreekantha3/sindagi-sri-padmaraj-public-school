/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,html}'],
  theme: {
    extend: {
      colors: {
        brand: { 50:'#EFF6FF',100:'#DBEAFE',500:'#1D4ED8',600:'#1E40AF',700:'#1E3A8A' },
        gold: { DEFAULT:'#C9A227', light:'#E7CE6B', dark:'#9A7B14' },
        cream: '#F7FAFF',
        ink: '#16233B' 
      },
      fontFamily: { display: ['"Plus Jakarta Sans"','system-ui','sans-serif'], body: ['Inter','system-ui','sans-serif'] }
    }
  },
  plugins: []
}
