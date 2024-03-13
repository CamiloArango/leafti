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
      },
    },
  },
};