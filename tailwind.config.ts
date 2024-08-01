import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"
import hocusPlugin from "tailwindcss-hocus"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [hocusPlugin],
  theme: {
    fontFamily: {
      sans: ["var(--font-raleway)", ...fontFamily.sans]
    },
    fontSize: {
      xs: ["0.8125rem", { lineHeight: "1.5rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.75rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "2rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.5rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "3.5rem" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }]
    },
    extend: {
      colors: {
        neutral: {
          50: "#E8E9EA",
          100: "#B8BABE",
          200: "#96989E",
          300: "#666A72",
          400: "#484D56",
          500: "#1A202C",
          600: "#181D28",
          700: "#12171F",
          800: "#0E1218",
          900: "#0B0D12"
        },
        background: "#F8F8F8"
      },
      padding: {
        "6.5": "1.625rem"
      },
      margin: {
        "6.5": "1.625rem"
      },
      width: {
        "7.5": "1.875rem"
      },
      height: {
        "7.5": "1.875rem"
      },
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        standard: "4 / 3",
        video: "16 / 9"
      },
      boxShadow: {
        glow: "0 0 4px rgb(0 0 0 / 0.1)"
      },
      maxWidth: {
        lg: "33rem",
        "2xl": "40rem",
        "3xl": "50rem",
        "5xl": "66rem"
      },
      opacity: {
        1: "0.01",
        2.5: "0.025",
        7.5: "0.075",
        15: "0.15"
      }
    }
  }
}

export default config
