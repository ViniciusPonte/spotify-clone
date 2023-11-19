'use client'
import { Play } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import dayjs from 'dayjs'

interface SongItemProps {
  image: string
  title: string
  artists: string[]
  album: string
  addedAt: string
  duration: number
  index: number
}

export function SongItem({
  image,
  title,
  artists,
  album,
  addedAt,
  duration,
  index,
}: SongItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  function handleIsHovered(state: boolean) {
    setIsHovered(state)
  }

  function renderPlayOrIndex() {
    if (isHovered) {
      return <Play className="text-white w-3 h-3" fill="white" />
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

    console.log(duration, minutes, seconds)

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`
  }

  return (
    <tr
      className="px-4 grid grid-cols-songList gap-4 w-full h-14 group rounded hover:bg-spotifyGray550 cursor-default"
      onMouseOver={() => handleIsHovered(true)}
      onMouseLeave={() => handleIsHovered(false)}
    >
      <td className="flex items-center">{renderPlayOrIndex()}</td>
      <td className="flex items-center gap-4 truncate">
        <Image src={image} width={40} height={40} alt={album} />
        <div className="flex flex-col truncate">
          <span className="text-white text-base leading-[22px] truncate">
            {title}
          </span>
          <div>
            <span className="text-sm leading-5 group-hover:text-white">
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
