'use client'
import { useSpotifyStore } from '@/store'
import Image from 'next/image'
import { Skeleton } from '../base/skeleton'

function SkeletonWrapper() {
  return (
    <>
      <Skeleton className="rounded w-[232px] h-[232px]" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-[80px] w-[300px]" />
        <div className="flex items-center gap-1 mt-8">
          <Skeleton className="rounded-full w-6 h-6" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    </>
  )
}

export function PlaylistDetails() {
  const { playlist } = useSpotifyStore((store) => {
    return {
      currentPlaylist: store.currentPlaylist,
      playlist: store.playlist,
      loadPlaylistDetail: store.loadPlaylistDetail,
    }
  })

  return (
    <div className="flex gap-5 items-end mt-10">
      {playlist ? (
        <>
          <Image
            src={playlist?.images?.length > 0 ? playlist?.images[0]?.url : ''}
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
              <span className="font-semibold">
                {playlist?.owner?.display_name ?? ''}
              </span>{' '}
              <span>• {playlist?.tracks?.total ?? 0} músicas</span>
            </div>
          </div>
        </>
      ) : (
        <SkeletonWrapper />
      )}
    </div>
  )
}
