import { Library } from 'lucide-react'
import { Link } from '../base/link'
import { PlaylistItem } from '../playlist/playlist-item'
import { api } from '@/services/api'
import { IPlaylistsResponse } from '@/interfaces/playlist'

export async function getPlaylists(): Promise<IPlaylistsResponse> {
  const playlistsResponse = await api(`/v1/browse/featured-playlists`)
  const playlists = await playlistsResponse.json()

  return playlists
}

export async function Sidebar() {
  const playlistsResponse = await getPlaylists()

  const playlists = playlistsResponse?.playlists?.items ?? []

  return (
    <div className="bg-spotifyGray700 rounded-lg px-1 py-4 h-full">
      <Link icon={Library} text="Playlists em destaque" />
      <ul className="max-h-playlistSection overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-thumb-rounded">
        {playlists &&
          playlists?.map((playlist) => {
            return (
              <PlaylistItem
                key={playlist.id}
                image={playlist.images[0].url}
                name={playlist.name}
                owner={playlist.owner.display_name}
              />
            )
          })}
      </ul>
    </div>
  )
}
