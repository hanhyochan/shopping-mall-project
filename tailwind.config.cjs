/** @type {import('tailwindcss').Config} */
const pxToRem = require("tailwindcss-preset-px-to-rem");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presets: [pxToRem],
    theme: {
        extend: {},
    },
    plugins: [],
};
