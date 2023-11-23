'use client'
import { Header } from '@/components/layout/header'
import { PlaylistDetails } from '@/components/playlist/playlist-details'
import { SongList } from '@/components/song/song-list'
import { useSpotifyStore } from '@/store'

export default function Home() {
  const { currentTrack } = useSpotifyStore((store) => {
    return {
      currentTrack: store.currentTrack,
    }
  })

  const hasTrackActive = Boolean(currentTrack)

  return (
    <div
      data-hastrackactive={hasTrackActive}
      className="h-full w-full rounded-lg bg-gradient-to-b from-spotifyPurple from-0% via-spotifyGray700 via-[400px] to-spotifyGray700 bg-local p-6 max-h-songsList overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-thumb-rounded data-[hastrackactive=false]:max-h-songsListWithoutMusic"
    >
      <Header />
      <PlaylistDetails />
      <SongList />
    </div>
  )
}
