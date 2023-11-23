'use client'
import { Volume1, Volume2, VolumeX } from 'lucide-react'
import { Slider } from '../base/slider'
import { useSpotifyStore } from '@/store'

export function Volume() {
  const { onChangeVolume, volume } = useSpotifyStore((store) => {
    return {
      onChangeVolume: store.onChangeVolume,
      activeTrackFile: store.activeTrackFile,
      volume: store.volume,
    }
  })

  function onClickIcon(value: number) {
    handleVolumeChange([value])
  }

  function handleVolumeChange(newVolume: number[]) {
    onChangeVolume(newVolume[0])
  }

  function renderVolumeIcon() {
    if (volume > 0 && volume <= 0.5) {
      return (
        <Volume1
          className="w-5 h-5 text-spotifyGray300 hover:text-white"
          onClick={() => onClickIcon(0)}
        />
      )
    }

    if (volume && volume > 0.5) {
      return (
        <Volume2
          className="w-5 h-5 text-spotifyGray300 hover:text-white"
          onClick={() => onClickIcon(0)}
        />
      )
    }

    return (
      <VolumeX
        className="w-5 h-5 text-spotifyGray300 hover:text-white"
        onClick={() => onClickIcon(0.3)}
      />
    )
  }

  return (
    <div className="flex gap-2 items-center justify-end">
      {renderVolumeIcon()}
      <Slider
        onValueChange={handleVolumeChange}
        variant="sm"
        max={1}
        step={0.01}
        value={[volume]}
      />
    </div>
  )
}
