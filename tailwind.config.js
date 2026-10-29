/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyber: {
          950: "#020610",
          900: "#040b17",
          850: "#071224",
          800: "#0a1931",
          750: "#0f2242",
          700: "#152c54",
          600: "#1e3d73",
        },
        neon: {
          cyan: "#00f0ff",
          teal: "#00e5a3",
          emerald: "#10b981",
          blue: "#3b82f6",
          amber: "#f59e0b",
        }
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif"
        ],
        mono: [
          "JetBrains Mono",
          "Fira Code",
          "ui-monospace",
          "SFMono-Regular",
          "monospace"
        ]
      },
      boxShadow: {
        "glow-cyan": "0 0 25px -5px rgba(0, 240, 255, 0.25)",
        "glow-teal": "0 0 25px -5px rgba(0, 229, 163, 0.25)",
        "glow-subtle": "0 0 40px -10px rgba(0, 240, 255, 0.12)",
        "card-cyber": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
        "cyber-dots": "radial-gradient(circle, rgba(0, 240, 255, 0.12) 1px, transparent 1px)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        }
      }
    },
  },
  plugins: [],
};
