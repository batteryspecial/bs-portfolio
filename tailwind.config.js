/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts}"],
    theme: {
      extend: {
        blur: {
            xs: '2px',
            sm: '4px',
            md: '8px',
            lg: '16px',
            xl: '24px',
        },
      },
    },
    plugins: [],
}