import { PlayCircle, SkipBack, SkipForward } from 'lucide-react'
import { Slider } from './slider'

export function Controls() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="flex items-center gap-5">
        <SkipBack className="w-5 h-5 text-spotifyGray300 hover:text-white" />
        <PlayCircle className="w-8 h-8 text-white hover:scale-105" />
        <SkipForward className="w-5 h-5 text-spotifyGray300 hover:text-white" />
      </div>
      <div className="flex items-center gap-3">
        <span className="text-[11px] text-spotifyGray300">1:04</span>
        <Slider />
        <span className="text-[11px] text-spotifyGray300">3:04</span>
      </div>
    </div>
  )
}
