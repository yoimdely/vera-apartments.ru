import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#FFFFFF",
        "brand-gold": {
          DEFAULT: "#D4AF37",
          light: "#F1D279",
          dark: "#997B19",
        },
        "brand-charcoal": "#0F0F0F",
        "brand-surface": {
          DEFAULT: "#121212",
          light: "#1A1A1A",
          lighter: "#252525"
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-cormorant)", "serif"],
      },
      fontSize: {
        "display-1": ["clamp(3.5rem, 8vw, 6rem)", { lineHeight: "1.05" }],
        "display-2": ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "1.1" }],
        "heading-1": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.2" }],
        "heading-2": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.2" }],
        body: ["clamp(1rem, 1.1vw, 1.125rem)", { lineHeight: "1.7" }],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gold-gradient": "linear-gradient(135deg, #8C6D2E 0%, #C09A3E 50%, #E0B860 100%)",
        "atmosphere": "radial-gradient(circle at center, rgba(192, 154, 62, 0.05) 0%, transparent 40%)",
        "mesh": "radial-gradient(at 0% 0%, rgba(192, 154, 62, 0.1) 0, transparent 50%), radial-gradient(at 100% 100%, rgba(31, 31, 31, 0.2) 0, transparent 50%)",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-up": "slideUp 1s ease-out forwards",
        "glow-pulse": "glowPulse 4s infinite ease-in-out",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
