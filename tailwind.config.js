const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        boxShadow: {
            DEFAULT: "0 2px 2px -1px rgba(54,54,54,0.03)",
            sm: "0 0 2px 0 rgba(54,54,54, 0.02)",
            lg: "0px 4px 8px -4px rgba(54, 54, 54, 0.12), 0px 4px 6px -4px rgba(0, 0, 0, 0.12)",
            xl: "0px 4px 8px -4px rgba(54, 54, 54, 0.12), 0px 4px 6px -4px rgba(0, 0, 0, 0.12)",
        },
        container: {
            center: true,
            padding: "1rem",
            screens: {
                sm: "480px",
                md: "480px",
                lg: "480px",
                xl: "480px",
                "2xl": "480px",
            },
        },
        fontSize: {
            "2xs": ["10px", "16px"],
            xs: ["12px", "18px"],
            sm: ["14px", "20px"],
            base: ["16px", "24px"],
            lg: ["18px", "26px"],
            xl: ["20px", "28px"],
            "2xl": ["24px", "32px"],
            "3xl": ["32px", "40px"],
            "4xl": ["40px", "48px"],
        },
        extend: {
            colors: {
                primary: {
                    surface: "#E9F7FB",
                    border: "#B0DEED",
                    DEFAULT: "#65BEDC",
                    hover: "#529EB7",
                    pressed: "#315E6D",
                },
                success: {
                    surface: "#DAE7DC",
                    border: "#C1D7C5",
                    DEFAULT: "#458750",
                    hover: "#3B7245",
                    pressed: "#305A37",
                },
                error: {
                    surface: "#FFC4C2",
                    border: "#FFA39E",
                    DEFAULT: "#DB0B00",
                    hover: "#B20900",
                    pressed: "#6B0500",
                },
                warning: {
                    surface: "#FFE9BD",
                    border: "#FFDB94",
                    DEFAULT: "#F0A000",
                    hover: "#BD7E00",
                    pressed: "#7A5200",
                },
                info: {
                    surface: "#DEE8FC",
                    border: "#8AACF4",
                    DEFAULT: "#4F81EE",
                    hover: "#436CC7",
                    pressed: "#274077",
                },
                neutral: {
                    50: "#fafafa",
                    100: "#f4f4f5",
                    200: "#d3d3d3",
                    300: "#b6b7c0",
                    400: "#f00",
                    500: "#888b99",
                    600: "#6d7082",
                    700: "#4a4d62",
                    800: "#2f334c",
                    900: "#1b1f3b",
                },
            },
            fontFamily: {
                sans: ["var(--font-montserrat)"],
            },
        },
    },
    darkMode: "className",
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#65BEDC",
                    secondary: "#d3d3d3",
                    neutral: "#fff",
                    "base-100": "#fff",
                    info: "#4f81ee",
                    success: "#458750",
                    warning: "#f0a000",
                    error: "#db0b00",
                    "--btn-text-case": "unset",
                },
            },
        ],
    },
};
