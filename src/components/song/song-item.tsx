'use client'
import { AlignRight, Pause, Play } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import dayjs from 'dayjs'
import { useSpotifyStore } from '@/store'

interface SongItemProps {
  image: string
  title: string
  artists: string[]
  album: string
  addedAt: string
  duration: number
  index: number
  id: string
}

export function SongItem({
  image,
  title,
  artists,
  album,
  addedAt,
  duration,
  index,
  id,
}: SongItemProps) {
  const { onClickTrack, currentTrack, onPause, onPlay, isPlaying } =
    useSpotifyStore((store) => {
      return {
        onClickTrack: store.onClickTrack,
        currentTrack: store.currentTrack,
        onPlay: store.onPlay,
        onPause: store.onPause,
        isPlaying: store.isPlaying,
      }
    })

  const [isHovered, setIsHovered] = useState(false)

  const isTrackActive = currentTrack === id

  function handleIsHovered(state: boolean) {
    setIsHovered(state)
  }

  function handleClickTrack() {
    onClickTrack(id)
    onPlay()
  }

  function renderPause() {
    if (isHovered) {
      return (
        <Pause
          className="text-white w-3 h-3 cursor-pointer"
          fill="white"
          onClick={onPause}
        />
      )
    }

    return <AlignRight className="text-spotifyGreen w-3 h-3 rotate-90" />
  }

  function renderPlayOrIndex() {
    if (isHovered) {
      return (
        <Play
          className="text-white w-3 h-3 cursor-pointer"
          fill="white"
          onClick={handleClickTrack}
        />
      )
    }

    return <span>{index}</span>
  }

  function formatAddedAt() {
    const date = dayjs(addedAt).format('DD/MM/YYYY')

    return date
  }

  function formatDuration() {
    const durationInSeconds = duration / 1000

    const minutes = Math.floor(durationInSeconds / 60)
    const seconds = Math.floor(durationInSeconds % 60)

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`
  }

  return (
    <tr
      className="px-4 grid grid-cols-songList gap-4 w-full h-14 group rounded hover:bg-spotifyGray550 cursor-default"
      onMouseOver={() => handleIsHovered(true)}
      onMouseLeave={() => handleIsHovered(false)}
      onDoubleClick={handleClickTrack}
    >
      <td className="flex items-center">
        {isTrackActive && isPlaying ? renderPause() : renderPlayOrIndex()}
      </td>
      <td className="flex items-center gap-4 truncate">
        <Image src={image} width={40} height={40} alt={album} />
        <div className="flex flex-col truncate">
          <span
            data-active={isTrackActive}
            className="text-white text-base leading-[22px] truncate data-[active=true]:text-spotifyGreen"
          >
            {title}
          </span>
          <div className="truncate">
            <span className="text-sm leading-5 group-hover:text-white truncate">
              {artists.join(', ')}
            </span>
          </div>
        </div>
      </td>
      <td className="flex items-center truncate group-hover:text-white">
        {album}
      </td>
      <td className="flex items-center group-hover:text-white">
        {formatAddedAt()}
      </td>
      <td className="flex items-center justify-center group-hover:text-white">
        {formatDuration()}
      </td>
    </tr>
  )
}
