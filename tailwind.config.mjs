/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cream: "#F8F6F0",
        beige: "#F2EFE7",
        "light-gray": "#E8E6E1",
        dark: "#1A1A1A",
        gold: "#D4AF37",
        copper: "#B87333",
        "gold-light": "#E7D190",
        "copper-light": "#D9A875",
        "text-light": "#767676",
        "beige-dark": "#E5E0D8",
        "footer-bg": "#EAE5DD",
        "warm-beige": "#F5F2EA",
        "warm-cream": "#F9F7F2",
        "warm-gray": "#EBE8E0",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
      },
      fontSize: {
        display: ["3.5rem", { lineHeight: "1.1" }],
        "display-sm": ["2.5rem", { lineHeight: "1.1" }],
      },
      spacing: {
        "128": "32rem",
      },
      animation: {
        "fade-in": "fadeIn 1.2s ease-in-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};