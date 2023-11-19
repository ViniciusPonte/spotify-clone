'use client'
import { Clock, Search } from 'lucide-react'
import { SongItem } from './song-item'
import { PlayIcon } from '../base/play-icon'
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

export function SongList() {
  const { tracks, isLoadingTracks } = useSpotifyStore((store) => {
    return {
      currentPlaylist: store.currentPlaylist,
      loadTracks: store.loadTracks,
      tracks: store.tracks,
      isLoadingTracks: store.isLoadingTracks,
    }
  })

  return (
    <div className="flex flex-col w-full bg-opacity-30">
      <div className="flex justify-between items-center my-8">
        {!isLoadingTracks && (
          <>
            <PlayIcon size={56} bgColor="bg-spotifyGreen" />
            <button className="cursor-pointer rounded-full hover:bg-spotifyGray550 p-2">
              <Search className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {!isLoadingTracks ? (
        <table className="text-left text-xs font-light text-spotifyGray300 table-fixed">
          <thead className="border-b border-spotifyGray500">
            <tr className="px-4 grid grid-cols-songList gap-4 w-full">
              <td className="pt-3 pb-2 w-8 flex items-center">#</td>
              <td className="pt-3 pb-2 w-30 flex items-center">Título</td>
              <td className="pt-3 pb-2 flex items-center">Album</td>
              <td className="pt-3 pb-2 flex items-center">Adicionada em</td>
              <td className="pt-3 pb-2 flex justify-center items-center">
                <Clock className="w-4 h-4 text-spotifyGray300" />
              </td>
            </tr>
          </thead>
          <tbody className="block pt-4">
            {tracks?.length > 0 &&
              tracks?.map((track, index) => {
                return (
                  <SongItem
                    id={track.track.id}
                    key={track.track.id}
                    title={track.track.name}
                    addedAt={track.added_at}
                    album={track.track.album.name}
                    artists={track.track.artists.map((artist) => artist.name)}
                    duration={track.track.duration_ms}
                    image={track.track.album.images[0].url}
                    index={index + 1}
                  />
                )
              })}
          </tbody>
        </table>
      ) : (
        <SkeletonWrapper />
      )}
    </div>
  )
}
