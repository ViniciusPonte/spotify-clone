import { getType, setType } from '.'
import { api } from '@/services/api'
import { Item } from '@/interfaces/tracks'

export interface TracksStore {
  tracks: Item[]
  currentTrack: string | null
  isLoadingTracks: boolean
  onClickTrack: (trackId: string, trackFile: string) => void
  loadTracks: () => Promise<void>
}

export const tracksStore = (set: setType, get: getType) => {
  return {
    tracks: [],
    currentTrack: null,
    isLoadingTracks: true,
    onClickTrack: (trackId: string, trackFile: string) => {
      const { loadTrackDetail, onPlay, onPause } = get()

      onPause()

      set({
        currentTrack: trackId,
        activeTrackFile: new Audio(trackFile),
      })

      loadTrackDetail()

      onPlay()
    },
    loadTracks: async () => {
      set({ isLoadingTracks: true })
      const { currentPlaylist } = get()
      const response = await api(`/v1/playlists/${currentPlaylist}/tracks`)
      const tracks = await response.json()
      set({
        tracks: tracks.items,
        isLoadingTracks: false,
      })
    },
  }
}
