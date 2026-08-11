/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#14110F",
          soft: "#1F1A17",
          muted: "#3A322D",
        },
        gold: {
          DEFAULT: "#C9A227",
          light: "#E3C878",
          pale: "#F0E2BC",
        },
        blush: {
          DEFAULT: "#E8CFC4",
          light: "#F5E7E0",
        },
        cream: {
          DEFAULT: "#FAF6F1",
          dark: "#F0E9E0",
        },
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["Jost", "'Helvetica Neue'", "Arial", "sans-serif"],
        script: ["'Pinyon Script'", "cursive"],
      },
      letterSpacing: {
        label: "0.28em",
      },
      maxWidth: {
        prose: "68ch",
      },
      boxShadow: {
        lift: "0 24px 60px -20px rgba(20, 17, 15, 0.45)",
        frame: "0 0 0 1px rgba(201, 162, 39, 0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};
