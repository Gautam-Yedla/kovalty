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
        background    : "#ffffff",
        foreground    : "#0f172a",
        primary       : {
          DEFAULT: "#0a1628",
          foreground: "#ffffff",
        },
        secondary     : {
          DEFAULT: "#1e3a5f",
          foreground: "#ffffff",
        },
        accent        : {
          DEFAULT: "#1dd3b0",
          foreground: "#0a1628",
        },
        muted         : {
          DEFAULT: "#f1f5f9",
          foreground: "#64748b",
        },
        border        : "#e2e8f0",
        input         : "#e2e8f0",
        ring          : "#1dd3b0",
        card          : {
          DEFAULT: "#ffffff",
          foreground: "#0f172a",
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
      },
      fontFamily: {
        sans : ["DM Sans", "sans-serif"],
        serif: ["Montserrat", "serif"],
        mono: ["SF Mono", "Monaco", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;

