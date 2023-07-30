/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         screens: {
            sm: "480px",
         },
         animation: {
            down: "down 0.4s ease-in-out",
         },
         keyframes: {
            down: {
               "0%": { transform: "translateY(-100%)", opacity: 0 },
               "70%": { opacity: 0 },
               "100%": { transform: "translateY(0%)", opacity: 1 },
            },
            // up: {
            //    "0%,25%": { transform: "translateY(0%)", opacity: 1 },
            //    "100%": { transform: "translateY(-100%)", opacity: 0 },
            // }
         },
      },
   },
   plugins: [],
};
