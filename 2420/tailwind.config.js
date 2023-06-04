/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "/src/test/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode : 'jit',
  purge: ['./src/app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [],
}
