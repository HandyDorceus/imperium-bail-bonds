import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep black for primary dark elements
        primary: {
          50: '#f5f5f5',
          100: '#e0e0e0',
          200: '#c2c2c2',
          300: '#a3a3a3',
          400: '#858585',
          500: '#666666',
          600: '#4a4a4a',
          700: '#2d2d2d',
          800: '#1a1a1a',
          900: '#0a0a0a',
        },
        // Sophisticated gold/brass tone for accents
        accent: {
          50: '#faf8f4',
          100: '#f5f0e6',
          200: '#ebe1ce',
          300: '#dfd0b0',
          400: '#d4bf92',
          500: '#c9a961',
          600: '#b8935f',
          700: '#9a7a4f',
          800: '#7c6240',
          900: '#5e4a30',
        },
        // Cream/off-white backgrounds and charcoal grays
        trust: {
          black: '#0a0a0a',
          darkGray: '#1a1a1a',
          charcoal: '#2d2d2d',
          gold: '#c9a961',
          goldDark: '#b8935f',
          cream: '#faf8f4',
          offWhite: '#f5f3ef',
          gray: '#64748b',
          lightGray: '#e0e0e0',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['var(--font-playfair)', 'Playfair Display', 'serif'],
        body: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'trust': '0 4px 6px -1px rgba(201, 169, 97, 0.1), 0 2px 4px -1px rgba(201, 169, 97, 0.06)',
        'gold': '0 4px 12px rgba(201, 169, 97, 0.3)',
        'elegant': '0 2px 8px rgba(10, 10, 10, 0.15)',
      },
    },
  },
  plugins: [],
};
export default config;
