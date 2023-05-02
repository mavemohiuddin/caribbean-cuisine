/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // 'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
                'design': ['Sigmar', "cursive"],
                'secondary' : ['Inconsolata', 'monospace']
            },
        }
    },
    plugins: [],
}