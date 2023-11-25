import { IPlaylist } from '@/interfaces/playlist'
import { getType, setType } from '.'
import { api } from '@/services/api'

export interface PlaylistsStore {
  playlists: IPlaylist[]
  currentPlaylist: string | null
  isLoadingPlaylists: boolean
  onClickPlaylist: (playlistId: string) => void
  loadPlaylists: () => Promise<void>
}

export const playlistsStore = (set: setType, get: getType) => {
  return {
    playlists: [],
    currentPlaylist: null,
    isLoadingPlaylists: true,
    onClickPlaylist: (playlistId: string) => {
      set({
        currentPlaylist: playlistId,
      })
      const { loadPlaylistDetail } = get()
      loadPlaylistDetail()
    },
    loadPlaylists: async () => {
      set({ isLoadingPlaylists: true })
      const response = await api(`/v1/browse/featured-playlists`)
      const playlists = await response.json()
      set({
        playlists: playlists?.playlists?.items ?? [],
        isLoadingPlaylists: false,
        currentPlaylist: playlists.playlists.items[0].id,
      })

      const { loadPlaylistDetail } = get()

      loadPlaylistDetail()
    },
  }
}
