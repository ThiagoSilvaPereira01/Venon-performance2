/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        venon: {
          dark: "#08090c",
          surface: "#0d0f15",
          card: "#12151e",
          cardHover: "#181c28",
          border: "#1e2433",
          borderGlow: "rgba(197, 160, 89, 0.35)",
          gold: "#c5a059",
          goldHover: "#b28d44",
          goldLight: "#dfb76c",
          goldDark: "#94722d",
          platinum: "#e2e8f0",
          silver: "#94a3b8",
          charcoal: "#1f2430",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Orbitron', 'Rajdhani', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'luxury': '0 10px 30px -5px rgba(0, 0, 0, 0.7), 0 0 20px -5px rgba(197, 160, 89, 0.18)',
        'luxury-lg': '0 20px 45px -10px rgba(0, 0, 0, 0.85), 0 0 35px -5px rgba(197, 160, 89, 0.3)',
        'subtle-card': '0 8px 30px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
