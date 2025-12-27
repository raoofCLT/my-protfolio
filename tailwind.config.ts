import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Strict Palette Definitions
        border: "#262626",
        input: "#262626",
        ring: "#D4A542",

        // Backgrounds
        background: {
          DEFAULT: "#000000", // bg-background
          deep: "#000000", // bg-background-deep
        },

        // Surface Colors
        card: {
          DEFAULT: "#0E0E0E", // bg-card
          foreground: "#FFFFFF",
          hover: "#1B1B1B", // bg-card-hover
          border: "#262626", // bg-card-border (if used as bg) or borderColor
        },

        // Semantic Roles
        foreground: "#FFFFFF",

        // User Specified Palette Names
        gold: {
          DEFAULT: "#D4A542", // text-gold / bg-gold
          light: "#F2C572", // text-gold-light
          pale: "#FFE4A8", // text-gold-pale (Secondary Text)
          tint: "#FFF8E1", // text-gold-tint
        },

        silver: {
          DEFAULT: "#C7C7C7", // text-silver (Secondary Text)
        },

        muted: {
          DEFAULT: "#333333", // text-muted / bg-muted
          foreground: "#C7C7C7",
        },

        // Legacy/Semantic mapping
        primary: {
          DEFAULT: "#FFFFFF",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#D4A542", // Gold as Secondary
          foreground: "#000000",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        popover: {
          DEFAULT: "#0E0E0E",
          foreground: "#FFFFFF",
        },
        sidebar: {
          DEFAULT: "#0E0E0E",
          foreground: "#FFFFFF",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "gold-pulse": {
          "0%, 100%": { boxShadow: "0 0 15px rgba(212, 165, 66, 0.3)" },
          "50%": { boxShadow: "0 0 25px rgba(212, 165, 66, 0.5)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.4s ease-out forwards",
        "gold-pulse": "gold-pulse 2s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
