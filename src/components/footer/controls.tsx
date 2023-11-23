import { SkipBack, SkipForward } from 'lucide-react'
import { Slider } from '../base/slider'
import { PlayIcon } from '../base/play-icon'
import { useSpotifyStore } from '@/store'
import { PauseIcon } from '../base/pause-icon'
import { useRef, useState } from 'react'
import { calculateTimeBasedOnSeconds } from '@/utils/calculateTimeBasedOnSeconds'

export function Controls() {
  const { isPlaying, onPlay, onPause, activeTrackFile, duration } =
    useSpotifyStore((store) => {
      return {
        isPlaying: store.isPlaying,
        onPlay: store.onPlay,
        onPause: store.onPause,
        activeTrackFile: store.activeTrackFile,
        duration: store.duration,
      }
    })

  const [currentTime, setCurrentTime] = useState(0)
  const animationRef = useRef<number>(0)

  function handleVolumeChange(position: number[]) {
    if (activeTrackFile) {
      activeTrackFile.currentTime = position[0]
    }
    setCurrentTime(position[0])
  }

  function togglePlayAndPause(shouldPlay?: boolean) {
    if (shouldPlay) {
      onPlay()
      animationRef.current = requestAnimationFrame(whilePlaying)
      return
    }

    onPause()
    cancelAnimationFrame(animationRef.current)
  }

  function whilePlaying() {
    if (activeTrackFile) {
      setCurrentTime(activeTrackFile.currentTime)
    }
    animationRef.current = requestAnimationFrame(whilePlaying)
  }

  const formattedDuration = Math.floor(activeTrackFile?.duration ?? 0)

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className="flex items-center gap-5">
        <SkipBack className="w-5 h-5 text-spotifyGray300 hover:text-white" />
        {isPlaying ? (
          <PauseIcon onClick={() => togglePlayAndPause()} />
        ) : (
          <PlayIcon onClick={() => togglePlayAndPause(true)} />
        )}
        <SkipForward className="w-5 h-5 text-spotifyGray300 hover:text-white" />
      </div>
      <div className="flex items-center gap-3">
        <span className="text-[11px] text-spotifyGray300">
          {calculateTimeBasedOnSeconds(currentTime)}
        </span>
        <Slider
          onValueChange={handleVolumeChange}
          value={[currentTime]}
          max={activeTrackFile?.duration}
          defaultValue={0}
        />
        <span className="text-[11px] text-spotifyGray300">
          {duration &&
            !isNaN(duration) &&
            calculateTimeBasedOnSeconds(formattedDuration)}
        </span>
      </div>
    </div>
  )
}
