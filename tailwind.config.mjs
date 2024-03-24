/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        geistBlack: ['"geistBlack"', "sans-serif"],
        geistBold: ['"geistBold"', "sans-serif"],
        geistMedium: ['"geistMedium"', "sans-serif"],
        geistRegular: ['"geistRegular"', "sans-serif"],
        geistUltralight: ['"geistUltralight"', "sans-serif"],
        geistUltrablack: ['"geistUltrablack"', "sans-serif"],
      },
      colors: {
        background: "#011a00",
        primary: "#DBF227",
        foreground: {
          1: "#FFFFFF",
          2: "#CBD5E1",
        }
      }
    },
  }
}