'use client'
import { useSpotifyStore } from '@/store'
import Image from 'next/image'

interface PlaylistItemProps {
  id: string
  name: string
  owner: string
  image: string
}

export function PlaylistItem({ id, name, owner, image }: PlaylistItemProps) {
  const { onClickPlaylist, currentPlaylist } = useSpotifyStore((store) => {
    return {
      onClickPlaylist: store.onClickPlaylist,
      currentPlaylist: store.currentPlaylist,
    }
  })

  function handleClickPlaylist() {
    onClickPlaylist(id)
  }

  const isActive = currentPlaylist === id

  return (
    <li
      data-active={isActive}
      className="cursor-pointer p-2 flex items-center gap-3 bg-spotifyGray700 hover:bg-spotifyGray600 rounded data-[active=true]:bg-spotifyGray600"
      onClick={() => handleClickPlaylist()}
    >
      <Image
        src={image ?? ''}
        alt=""
        width={48}
        height={48}
        className="rounded"
      />
      <div className="flex flex-col gap-1">
        <span
          data-active={isActive}
          className="truncate text-white data-[active=true]:text-spotifyGreen"
        >
          {name}
        </span>
        <span className="text-xs truncate text-spotifyGray300">
          Playlist • {owner}
        </span>
      </div>
    </li>
  )
}
