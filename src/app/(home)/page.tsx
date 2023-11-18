import { Header } from '@/components/header'
import { PlaylistDetails } from '@/components/playlist-details'

export default function Home() {
  return (
    <div className="h-full w-full rounded-lg bg-gradient-to-t from-spotifyGray700 via-spotifyGray700 to-purple-600 p-6">
      <Header />
      <PlaylistDetails />
    </div>
  )
}
