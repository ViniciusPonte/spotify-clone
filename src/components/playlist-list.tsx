import { Library } from 'lucide-react'
import { Link } from './link'
import { PlaylistItem } from './playlist-item'

export function PlaylistList() {
  return (
    <div className="bg-spotifyGray700 rounded-lg px-1 py-4 h-full">
      <Link icon={Library} text="Sua biblioteca" />
      <ul className="max-h-playlistSection overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-thumb-rounded">
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
      </ul>
    </div>
  )
}
