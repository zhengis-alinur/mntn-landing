/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                background: '#0B1D26',
                accent: '#FBD784',
            },
            fontFamily: {
                georgia: 'Georgia',
                gilroy: 'Gilroy',
            },
        },
    },
    plugins: [],
};
