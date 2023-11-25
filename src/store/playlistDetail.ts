import { getType, setType } from '.'
import { api } from '@/services/api'
import { IPlaylistDetailResponse } from '@/interfaces/tracks'

export interface PlaylistDetailStore {
  playlist: IPlaylistDetailResponse | null
  isLoadingPlaylistDetail: boolean
  loadPlaylistDetail: () => Promise<void>
}

export const playlistDetailStore = (set: setType, get: getType) => {
  return {
    playlist: null,
    isLoadingPlaylistDetail: true,
    loadPlaylistDetail: async () => {
      set({ isLoadingPlaylistDetail: true })
      const { currentPlaylist, loadTracks } = get()
      const response = await api(`/v1/playlists/${currentPlaylist}`)
      const playlist = await response.json()
      set({
        playlist,
        isLoadingPlaylistDetail: false,
      })

      loadTracks()
    },
  }
}
