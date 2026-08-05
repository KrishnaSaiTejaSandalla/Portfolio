import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'neo-white': '#FFFDF5',
        'neo-black': '#121212',
        'neo-yellow': '#FBFF48',
        'neo-blue': '#2D7FF9',
        'neo-green': '#33FF57',
        'neo-red': '#FF2A2A',
        'neo-pink': '#FF70D9',
        'neo-orange': '#FF8A00',
        'neo-purple': '#A855F7',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        hard: '4px 4px 0 0 #000',
        'hard-sm': '2px 2px 0 0 #000',
        'hard-lg': '8px 8px 0 0 #000',
        'hard-xl': '12px 12px 0 0 #000',
      },
    },
  },
  plugins: [],
};

export default config;
