import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background    : "#000000",
        foreground    : "#ffffff",
        primary       : {
          DEFAULT: "#1d2233",
          foreground: "#ffffff",
        },
        secondary     : {
          DEFAULT: "#232946",
          foreground: "#ffffff",
        },
        accent        : {
          DEFAULT: "#3b82f6",
          foreground: "#ffffff",
        },
        muted         : {
          DEFAULT: "#1d2233",
          foreground: "#b6d0fa",
        },
        border        : "rgba(59, 130, 246, 0.2)",
        input         : "rgba(59, 130, 246, 0.1)",
        ring          : "#3b82f6",
        card          : {
          DEFAULT: "#1d2233",
          foreground: "#ffffff",
        },
        success       : {
          DEFAULT: "#10b981",
          foreground: "#ffffff",
        },
        warning       : {
          DEFAULT: "#f59e0b",
          foreground: "#ffffff",
        },
        destructive   : {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        'kovalty-blue': {
          DEFAULT: "#3b82f6",
          light: "#7bb8e6",
          dark: "#1e40af",
        },
      },
      fontFamily: {
        sans : ["Inter", "sans-serif"],
        serif: ["Source Serif Pro", "serif"],
        display: ["Playfair Display", "serif"],
        mono: ["SF Mono", "Monaco", "monospace"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textColor: {
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;

