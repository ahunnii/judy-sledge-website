import { type Config } from "tailwindcss";
const colors = require("tailwindcss/colors");
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D0C1D",
        secondary: "#EFFFFA",
        accent: "hsl(265,96%,55%)",
        highlight: "#F2F2F2",
        muted: "#F2F2F2",
        default: "#333333",
        purpleAccent: "hsl(280,100%,70%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
