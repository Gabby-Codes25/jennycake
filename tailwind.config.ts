import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F3EE",
        "ivory-2": "#EFE8DE",
        espresso: "#2B2420",
        clay: "#C08373",
        "clay-dark": "#A66857",
        sage: "#8A9A7E",
        brass: "#B08D57",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
