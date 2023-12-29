/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        padding: "2rem",
        center: true,
      },
      colors: {
        Taccent: "#FFF1DA",
        Ttext: "#181E4B",
        Tmuted: "#5E6282",
        Tyellow: "#F1A501",
        Tred: "#DF6951",
      },
    },
  },
  plugins: [],
};
