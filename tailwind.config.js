/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        marketing: {
          primary: "hsl(var(--marketing-primary))",
          secondary: "hsl(var(--marketing-secondary))",
          light: "hsl(var(--marketing-light))",
          dark: "hsl(var(--marketing-dark))",
          accent: "hsl(var(--marketing-accent))",
        },
      },
    },
  },
  plugins: [],
} 