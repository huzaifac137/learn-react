/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}"
  ],
  theme: {
    screens :{
       'sm' : "640px" ,
        'md' : "768px" ,
       'lg ':"1024px"
    } ,
    colors :{
         primary :"#040D12" ,
         secondary :"#183D3D" ,
         tertiary :"#5C8374" ,
         fourth :"#93B1A6" ,
         black :"#000"
    }
  },
  plugins: [],
}

