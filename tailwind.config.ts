import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "adani-blue":   { DEFAULT:"#8A6D3B", light:"#A98C5B", pale:"#F7F1E5" },
        "adani-orange": { DEFAULT:"#C6A15B", light:"#E2C896" },
        "adani-green":  { DEFAULT:"#6F7D63", light:"#EDF1E8" },
        "adani-dark":   "#1B1713",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "serif"],
        body:    ["var(--font-opensans)", "sans-serif"],
        barlow:  ["var(--font-barlow)", "sans-serif"],
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        scaleIn: "scaleIn 200ms ease",
        scaleOut: "scaleOut 200ms ease",
      },
      keyframes: {
        marquee: { "0%":{transform:"translateX(0)"},"100%":{transform:"translateX(-50%)"} },
        fadeUp:  { from:{opacity:"0",transform:"translateY(30px)"}, to:{opacity:"1",transform:"translateY(0)"} },
        scaleIn: {
          from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
        },
        scaleOut: {
          from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
          to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" },
        },
      },
      container: { center:true, padding:{ DEFAULT:"1rem", lg:"2rem", "2xl":"4rem" } },
    },
  },
  plugins: [],
};
export default config;
