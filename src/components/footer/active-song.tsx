'use client'
import { useSpotifyStore } from '@/store'
import Image from 'next/image'

export function ActiveSong() {
  const { track } = useSpotifyStore((store) => {
    return {
      track: store.track,
    }
  })

  const artists = track && track.artists.map((artist) => artist.name)

  return (
    <div className="flex items-center gap-3 max-w-xs">
      <Image
        src={track?.album.images[0].url ?? ''}
        alt=""
        width={56}
        height={56}
        className="rounded"
      />
      <div className="flex flex-col gap-1 truncate">
        <span className="text-white text-sm">{track?.name}</span>
        <span className="text-xs text-spotifyGray300 truncate">
          {artists ? artists.join(', ') : ''}
        </span>
      </div>
    </div>
  )
}
