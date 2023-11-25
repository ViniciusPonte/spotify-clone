import { Shuffle, SkipBack, SkipForward } from 'lucide-react'
import { Slider } from '../base/slider'
import { PlayIcon } from '../base/play-icon'
import { useSpotifyStore } from '@/store'
import { PauseIcon } from '../base/pause-icon'
import { calculateTimeBasedOnSeconds } from '@/utils/calculateTimeBasedOnSeconds'
import { useEffect } from 'react'

export function Controls() {
  const {
    isPlaying,
    onPlay,
    onPause,
    activeTrackFile,
    duration,
    currentTime,
    onChangeCurrentTime,
    onClickNextTrack,
    onClickPreviousTrack,
    isRandom,
    onChangeReproducingMode,
  } = useSpotifyStore((store) => {
    return {
      isPlaying: store.isPlaying,
      onPlay: store.onPlay,
      onPause: store.onPause,
      activeTrackFile: store.activeTrackFile,
      duration: store.duration,
      currentTime: store.currentTime,
      onChangeCurrentTime: store.onChangeCurrentTime,
      onClickNextTrack: store.onClickNextTrack,
      onClickPreviousTrack: store.onClickPreviousTrack,
      isRandom: store.isRandom,
      onChangeReproducingMode: store.onChangeReproducingMode,
    }
  })

  function handleVolumeChange(position: number[]) {
    if (activeTrackFile) {
      activeTrackFile.currentTime = position[0]
    }
    onChangeCurrentTime(position[0])
  }

  const formattedDuration = Math.floor(activeTrackFile?.duration ?? 0)

  const isTrackEnded = activeTrackFile?.ended

  useEffect(() => {
    if (isTrackEnded) {
      onClickNextTrack()
    }
  }, [isTrackEnded, onClickNextTrack])

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className="flex items-center gap-5">
        <Shuffle
          data-active={isRandom}
          className="w-4 h-4 cursor-pointer text-spotifyGray300 hover:text-white data-[active=true]:text-spotifyGreen data-[active=true]:hover:text-spotifyGreen"
          onClick={onChangeReproducingMode}
        />
        <SkipBack
          className="w-5 h-5 cursor-pointer text-spotifyGray300 hover:text-white"
          onClick={onClickPreviousTrack}
        />
        {isPlaying ? (
          <PauseIcon onClick={onPause} />
        ) : (
          <PlayIcon onClick={onPlay} />
        )}
        <SkipForward
          className="w-5 h-5 cursor-pointer text-spotifyGray300 hover:text-white"
          onClick={onClickNextTrack}
        />
        <div />
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
