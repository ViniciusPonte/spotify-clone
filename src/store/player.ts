import { getType, setType } from '.'
import { RefObject } from 'react'

export interface PlayerStore {
  isPlaying: boolean
  activeTrackFile: HTMLAudioElement | null
  currentTime: number
  duration: number
  isRandom: boolean
  volume: number
  animationRef: RefObject<number>
  onPlay: () => void
  onPause: () => void
  onChangeVolume: (volume: number) => void
  animateWhilePlaying: () => void
  onChangeCurrentTime: (time: number) => void
  onClickNextTrack: () => void
  onClickPreviousTrack: () => void
  onChangeReproducingMode: () => void
}

export const playerStore = (set: setType, get: getType) => {
  return {
    isPlaying: false,
    duration: 0,
    currentTime: 0,
    activeTrackFile: null,
    isRandom: true,
    volume: 0.05,
    animationRef: {
      current: null,
    },
    onPlay() {
      set({
        isPlaying: true,
      })
      const { activeTrackFile, volume, animateWhilePlaying } = get()

      if (activeTrackFile) {
        activeTrackFile.volume = volume
      }

      activeTrackFile?.play()

      set({
        animationRef: { current: requestAnimationFrame(animateWhilePlaying) },
      })
    },
    onPause() {
      set({
        isPlaying: false,
      })
      const { activeTrackFile, animationRef } = get()

      activeTrackFile?.pause()

      if (!isNaN(Number(animationRef.current))) {
        cancelAnimationFrame(Number(animationRef.current))
      }
    },
    onChangeVolume(volume: number) {
      set({
        volume,
      })
      const { activeTrackFile } = get()

      if (activeTrackFile) {
        activeTrackFile.volume = volume
      }
    },
    onChangeReproducingMode() {
      const { isRandom } = get()

      set({
        isRandom: !isRandom,
      })
    },
    animateWhilePlaying() {
      const { activeTrackFile, animateWhilePlaying, onChangeCurrentTime } =
        get()

      if (activeTrackFile) {
        onChangeCurrentTime(activeTrackFile?.currentTime)
      }

      set({
        animationRef: { current: requestAnimationFrame(animateWhilePlaying) },
      })
    },
    onChangeCurrentTime(time: number) {
      set({
        currentTime: time,
      })
    },
    onClickNextTrack() {
      const { tracks, currentTrack, onClickTrack, isRandom } = get()

      const activeTrackIndex = tracks.findIndex(
        (track) => track.track.id === currentTrack,
      )

      if (isRandom) {
        const randomSongIndex = Math.floor(
          Math.random() * (tracks.length - 0 + 1),
        )

        const randomSong = tracks[randomSongIndex]
        onClickTrack(randomSong.track.id, randomSong.track.preview_url)
        return
      }

      const nextSongIndex = activeTrackIndex + 1
      const nextSong = tracks[nextSongIndex]

      onClickTrack(nextSong.track.id, nextSong.track.preview_url)
    },
    onClickPreviousTrack() {
      const { tracks, currentTrack, onClickTrack } = get()

      const activeTrackIndex = tracks.findIndex(
        (track) => track.track.id === currentTrack,
      )

      const previousSongIndex = activeTrackIndex - 1

      const previousSong = tracks[previousSongIndex]

      onClickTrack(previousSong.track.id, previousSong.track.preview_url)
    },
  }
}
