import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        spotifyGray700: '#121212',
      },
      gridTemplateColumns: {
        layout: 'minmax(280px, 420px) minmax(804px, 1fr)',
      },
    },
  },
  plugins: [],
}
export default config
