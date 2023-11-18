import { ActiveSong } from '../footer/active-song'
import { Controls } from '../footer/controls'
import { Volume } from '../footer/volume'

export function Footer() {
  return (
    <footer className="h-[72px] w-full col-span-2 flex items-center justify-between px-3">
      <ActiveSong />

      <Controls />

      <Volume />
    </footer>
  )
}
