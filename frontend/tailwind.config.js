/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#061229",
        "bg-deep": "#040b1c",
        panel: "rgba(255,255,255,0.045)",
        "panel-strong": "rgba(255,255,255,0.07)",
        border: "rgba(255,255,255,0.09)",
        purple: "#8b5cf6",
        blue: "#3b82f6",
        gold: "#d4af6a",
        ink: "#e9edf7",
        dim: "#8b94b3",
        faint: "#5b6483",
        win: "#34d399",
        loss: "#f87171",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Manrope", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 24px 60px -20px rgba(0,0,0,0.6)",
        "play-btn": "0 8px 24px -8px rgba(124,92,255,0.55)",
      },
    },
  },
  plugins: [],
};
