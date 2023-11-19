import { IPlaylistDetailResponse } from '@/interfaces/tracks'
import { api } from '@/services/api'
import Image from 'next/image'

export async function getPlaylistDetail(): Promise<IPlaylistDetailResponse> {
  const playlistDetailResponse = await api(
    `/v1/playlists/37i9dQZF1DXdSjVZQzv2tl`,
  )
  const playlist = await playlistDetailResponse.json()

  return playlist
}

export async function PlaylistDetails() {
  const playlist = await getPlaylistDetail()

  return (
    <div className="flex gap-5 items-end mt-10">
      <Image
        src={playlist.images[0].url}
        alt=""
        width={232}
        height={232}
        className="rounded"
      />
      <div className="flex flex-col gap-2">
        <span className="text-sm">Playlist</span>
        <span className="text-[5rem] leading-[80px] font-bold">
          {playlist.name}
        </span>
        <div className="flex items-center gap-1 mt-8  text-sm">
          <Image
            src={'https://github.com/ViniciusPonte.png'}
            alt=""
            height={24}
            width={24}
            className="rounded-full w-6 h-6"
          />
          <span className="font-semibold">{playlist.owner.display_name}</span>{' '}
          <span>• {playlist.tracks.total} músicas</span>
        </div>
      </div>
    </div>
  )
}
