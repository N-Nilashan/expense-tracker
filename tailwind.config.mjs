/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: 'hsl(34, 89%, 50%)', // Warm Orange
                    foreground: 'hsl(34, 89%, 95%)', // Soft Cream
                },
                secondary: {
                    DEFAULT: 'hsl(155, 40%, 45%)', // Forest Green
                    foreground: 'hsl(155, 40%, 90%)', // Pale Mint
                },
                muted: {
                    DEFAULT: 'hsl(42, 15%, 60%)', // Sandstone Beige
                    foreground: 'hsl(42, 15%, 85%)', // Light Sand
                },
                accent: {
                    DEFAULT: 'hsl(12, 80%, 55%)', // Vibrant Coral
                    foreground: 'hsl(12, 80%, 95%)', // Light Coral
                },
                destructive: {
                    DEFAULT: 'hsl(0, 70%, 45%)', // Crimson
                    foreground: 'hsl(0, 70%, 90%)', // Light Crimson
                },
                border: 'hsl(30, 15%, 70%)', // Soft Greyish Brown
                input: 'hsl(30, 20%, 85%)', // Light Beige
                ring: 'hsl(155, 40%, 65%)', // Soft Mint Green
                chart: {
                    '1': 'hsl(105, 50%, 45%)', // Moss Green
                    '2': 'hsl(12, 80%, 55%)', // Coral
                    '3': 'hsl(34, 89%, 50%)', // Orange
                    '4': 'hsl(50, 70%, 50%)', // Mustard Yellow
                    '5': 'hsl(0, 70%, 45%)', // Crimson
                },
            },
            borderRadius: {
                lg: '8px', // Smooth, slightly larger radius
                md: '6px', // Slightly smaller radius
                sm: '4px', // Sharp radius for elements like buttons
            },
        },
    },
    
};
