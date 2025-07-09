/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx,html}", "./index.html"];
export const theme = {
    extend: {},
    plugins: [require("@tailwindcss/forms")],
};
export const plugins = [];
