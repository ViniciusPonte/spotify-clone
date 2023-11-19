'use client'
import { useSpotifyStore } from '@/store'
import { ActiveSong } from '../footer/active-song'
import { Controls } from '../footer/controls'
import { Volume } from '../footer/volume'

export function Footer() {
  const { track } = useSpotifyStore((store) => {
    return {
      track: store.track,
    }
  })

  return (
    <footer className="h-[72px] w-full col-span-2 grid grid-cols-footer px-3">
      {track && (
        <>
          <ActiveSong />
          <Controls />
          <Volume />
        </>
      )}
    </footer>
  )
}
