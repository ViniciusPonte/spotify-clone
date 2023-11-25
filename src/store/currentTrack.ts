import { getType, setType } from '.'
import { api } from '@/services/api'
import { Track } from '@/interfaces/tracks'

export interface CurrentTrackStore {
  track: Track | null
  isLoadingTrackDetail: boolean
  loadTrackDetail: () => Promise<void>
}

export const currentTrackStore = (set: setType, get: getType) => {
  return {
    track: null,
    isLoadingTrackDetail: true,
    loadTrackDetail: async () => {
      set({ isLoadingTrackDetail: true })
      const { currentTrack, activeTrackFile } = get()
      const response = await api(`/v1/tracks/${currentTrack}`)
      const track = await response.json()
      set({
        track,
        isLoadingPlaylistDetail: false,
        currentTime: 0,
        duration: activeTrackFile?.duration,
      })
    },
  }
}
