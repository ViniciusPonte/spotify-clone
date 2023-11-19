'use client'
import { Library } from 'lucide-react'
import { Link } from '../base/link'
import { PlaylistItem } from '../playlist/playlist-item'
import { useEffect } from 'react'
import { useSpotifyStore } from '@/store'
import { Skeleton } from '../base/skeleton'

function SkeletonWrapper() {
  const skeletonArray = Array.from({ length: 20 })

  return (
    <div className="flex flex-col gap-1">
      {skeletonArray.map((_, index) => (
        <Skeleton key={index} className="h-[60px] w-[99%]" />
      ))}
    </div>
  )
}

export function Sidebar() {
  const { loadPlaylists, playlists, isLoadingPlaylists } = useSpotifyStore(
    (store) => {
      return {
        loadPlaylists: store.loadPlaylists,
        playlists: store.playlists,
        isLoadingPlaylists: store.isLoadingPlaylists,
      }
    },
  )

  useEffect(() => {
    loadPlaylists()
  }, [loadPlaylists])

  return (
    <div className="bg-spotifyGray700 rounded-lg px-1 py-4 h-full">
      <Link icon={Library} text="Playlists em destaque" />
      <ul className="max-h-playlistSection overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-thumb-rounded">
        {playlists.length > 0 && !isLoadingPlaylists ? (
          playlists?.map((playlist) => {
            return (
              <PlaylistItem
                id={playlist.id}
                key={playlist.id}
                image={playlist.images[0].url}
                name={playlist.name}
                owner={playlist.owner.display_name}
              />
            )
          })
        ) : (
          <SkeletonWrapper />
        )}
      </ul>
    </div>
  )
}
