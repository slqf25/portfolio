/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Noto Sans JP", "Inter", "system-ui", "sans-serif"],
            },
            colors: {
                ivory: "#f8f6f2",
                tea: "#cfe8dd",
                skysoft: "#d9e7f6",
            },
            boxShadow: {
                soft: "0 10px 30px rgba(0,0,0,0.06)",
            },
        },
    },
    plugins: [],
};