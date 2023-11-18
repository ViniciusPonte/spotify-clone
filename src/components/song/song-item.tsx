'use client'
import { Play } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export function SongItem() {
  const [isHovered, setIsHovered] = useState(false)

  function handleIsHovered(state: boolean) {
    setIsHovered(state)
  }

  function renderPlayOrIndex(index: number) {
    if (isHovered) {
      return <Play className="text-white w-3 h-3" fill="white" />
    }

    return <span>{index}</span>
  }

  return (
    <tr
      className="px-4 grid grid-cols-songList gap-4 w-full h-14 group rounded hover:bg-spotifyGray550 cursor-default"
      onMouseOver={() => handleIsHovered(true)}
      onMouseLeave={() => handleIsHovered(false)}
    >
      <td className="flex items-center">{renderPlayOrIndex(1)}</td>
      <td className="flex items-center gap-4 truncate">
        <Image
          src="https://s2.glbimg.com/BhvoS48eOJDtKnxOGCIMHMcdKuM=/smart/e.glbimg.com/og/ed/f/original/2021/05/21/billie-eilish-happier-than-ever.jpeg"
          width={40}
          height={40}
          alt=""
        />
        <div className="flex flex-col">
          <span className="text-white text-base leading-[22px]">
            happier than ever
          </span>
          <div>
            <span className="text-sm leading-5 group-hover:text-white">
              Billie Eilish
            </span>
          </div>
        </div>
      </td>
      <td className="flex items-center truncate group-hover:text-white">
        Starlight (Keep me afloat)
      </td>
      <td className="flex items-center group-hover:text-white">
        26 de ago. de 2023
      </td>
      <td className="flex items-center justify-end group-hover:text-white">
        3:40
      </td>
    </tr>
  )
}
