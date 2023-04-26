/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // primary
                'desaturated-red': 'hsl(0, 36%, 70%)',
                'soft-red': 'hsl(0, 93%, 68%)',

                //neutral
                'dark-grayish-red' : 'hsl(0, 6%, 24%)',

            },
        },
    },
    plugins: [],
};
