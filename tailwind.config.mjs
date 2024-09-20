/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#373A40",
        "dark-transparent": "#111111BF",
        light: "#EEEEEE",
        "light-transparent": "#FFFFFF5F",
        orange: "#DC5F00",
        gray: "#686D76",
        "dark-gray": "#1A1A1A",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
