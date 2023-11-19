import { SkipBack, SkipForward } from 'lucide-react'
import { Slider } from '../base/slider'
import { PlayIcon } from '../base/play-icon'
import { useSpotifyStore } from '@/store'
import { PauseIcon } from '../base/pause-icon'

export function Controls() {
  const { isPlaying, onPlay, onPause } = useSpotifyStore((store) => {
    return {
      isPlaying: store.isPlaying,
      onPlay: store.onPlay,
      onPause: store.onPause,
    }
  })

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className="flex items-center gap-5">
        <SkipBack className="w-5 h-5 text-spotifyGray300 hover:text-white" />
        {isPlaying ? (
          <PauseIcon onClick={onPause} />
        ) : (
          <PlayIcon onClick={onPlay} />
        )}
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
