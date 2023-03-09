/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      mm: "375px",
      ml: "425px",
      cc: "560px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "2560px",
    },
    extend: {},
  },
  plugins: [],
};

// export const international breakpoints = {
// 	sm: "320px",
// 	mm: "375px",
// 	ml: "425px",
// 	md: "768px",
// 	lg: "1024px",
// 	xl: "1440px",
// 	"2xl": "2560px",
// };

// screens: { Default sizes of Tailwind
//   'sm': '640px',
//   // => @media (min-width: 640px) { ... }
//   'md': '768px',
//   // => @media (min-width: 768px) { ... }
//   'lg': '1024px',
//   // => @media (min-width: 1024px) { ... }
//   'xl': '1280px',
//   // => @media (min-width: 1280px) { ... }
//   '2xl': '1536px',
//   // => @media (min-width: 1536px) { ... }
// },
