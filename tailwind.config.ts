import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        '100': '32rem',
      },
      textColor: {
        spotifyGray300: '#a7a7a7',
        spotifyGreen: '#1ED760',
      },
      backgroundColor: {
        spotifyGray500: '#808080',
        spotifyGray550: '#3b3a3a',
        spotifyGray600: '#171717',
        spotifyGray700: '#121212',
        spotifyGreen: '#1ED760',
      },
      borderColor: {
        spotifyGray500: '#262626',
        spotifyGray600: '#171717',
      },
      gridTemplateColumns: {
        layout: 'minmax(280px, 420px) minmax(804px, 1fr)',
        songList: '16px 8fr 6fr 2fr 2fr',
        footer: 'repeat(3, 1fr)',
      },
      gridTemplateRows: {
        layout: '1fr 72px',
        layoutWithoutMusic: '1fr',
      },
      maxHeight: {
        playlistSection: 'calc(100vh - 290px)',
        playlistSectionWithoutMusic: 'calc(100vh - 290px + 72px)',
        songsList: 'calc(100vh - 90px)',
        songsListWithoutMusic: 'calc(100vh - 90px + 72px)',
      },
      gradientColorStops: {
        spotifyGray700: '#121212',
        spotifyPurple: '#523b9c',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
  variants: {
    scrollbar: ['rounded'],
  },
}
export default config
