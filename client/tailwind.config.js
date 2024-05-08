/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "podcast-background": `url('/images/synthBG.jpg')`,
      },
      boxShadow: {
        // glow: "0 0 20px #A555F7",
        glow: "0 0 16px 8px #9000ff50",
      },
    },
  },
  plugins: [],
};
