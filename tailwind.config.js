const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./components/**/*.js", "./pages/**/*.js"],
    media: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                gray: {
                    100: "#FBFBFB",
                    200: "#c2c7ca",
                    300: "#b8bcbf",
                    400: "#999999",
                    500: "#7F7F7F",
                    600: "#666666",
                    700: "#4C4C4C",
                    800: "#121212",
                    900: "#191919",
                },
            },
            spacing: {
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.666667%',
                '2/6': '33.333333%',
                '3/6': '50%',
                '4/6': '66.666667%',
                '5/6': '83.333333%',
                '1/12': '8.333333%',
                '2/12': '16.666667%',
                '3/12': '25%',
                '4/12': '33.333333%',
                '5/12': '41.666667%',
                '6/12': '50%',
                '7/12': '58.333333%',
                '8/12': '66.666667%',
                '9/12': '75%',
                '10/12': '83.333333%',
                '11/12': '91.666667%',
                '12/12': '100%',
            },
            fontFamily: {
                'sans': ['comfortaa', ...defaultTheme.fontFamily.sans],
                logoFont: ['Train One'],
            },

            //ecostate
            container: {
                center: true,
                padding: {
                    DEFAULT: "15px",
                    sm: "15px",
                    lg: "15px",
                    xl: "15px",
                    "2xl": "15px",
                },
                screens: {
                    xs: "100%",
                    sm: "100%",
                    md: "768px",
                    lg: "992px",
                    xl: "1400px",
                    "2xl": "1530px",
                },
            },
            keyframes: {
                rollIn: {
                    "0%": {
                        transform: "translateX(-100%) rotate(-120deg)",
                    },
                    "50%": { transform: "translateX(0px) rotate(0deg)" },
                },
                waves: {
                    "0%": {
                        transform: "scale(0.2, 0.2)",
                        opacity: "0",
                    },
                    "50%": {
                        opacity: " 0.9",
                    },
                    "100%": {
                        transform: "scale(0.7, 0.7)",
                        opacity: "0",
                    },
                },
            },

            animation: {
                rollIn: "rollIn 1s ease-in-out",
                waves: "waves 3s ease-in-out infinite",
            }
            

        },
        
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
