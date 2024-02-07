/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {

        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },

            colors: {
                'primary': {
                    '100': '#f8fcff',
                    '200': '#eff8ff',
                    '300': '#aad4f5',
                    '400': '#63a2d8',
                    '500': '#3183c8',
                    '600': '#2368a2',
                    '700': '#1a4971',
                    '800': '#12283a',
                    '900': '#0e2e4e',
                    'blueGrayLight': '#edf2f7',
                },
            },
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant('child', '& > *');
            addVariant('child-hover', '& > *:hover');
        }
    ],
}
