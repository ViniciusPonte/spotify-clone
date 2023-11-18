import { ActiveSong } from './active-song'
import { Controls } from './controls'
import { Volume } from './volume'

export function Footer() {
  return (
    <footer className="h-[72px] w-full col-span-2 flex items-center justify-between px-3">
      <ActiveSong />

      <Controls />

      <Volume />
    </footer>
  )
}
