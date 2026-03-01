/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#181c56',
          light: '#292b6a',
        },
        secondary: '#ff5959',
        accent: {
          lavender: '#aeb7e2',
          peach: '#ffbf9e',
        },
        train: '#00367f',
        background: '#f5f5f8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
