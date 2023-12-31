import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        point: '#1D9BF0',
        darkText: '#71767A',
      },
      fontFamily: {
        open: ['var(--font-open)'],
        noto: ['var(--font-noto)'],
      },
    },
  },
  plugins: [],
};
export default config;
