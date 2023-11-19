/* eslint-disable react-hooks/rules-of-hooks */
import { IPlaylistDetailResponse, Item } from '@/interfaces/tracks'
import { api } from '@/services/api'
import { create } from 'zustand'
import { IPlaylist } from '@/interfaces/playlist'

interface SpotifyState {
  // playlists
  playlists: IPlaylist[]
  currentPlaylist: string
  isLoadingPlaylists: boolean
  onClickPlaylist: (playlistId: string) => void
  loadPlaylists: () => Promise<void>

  // playlist detail
  playlist: IPlaylistDetailResponse | null
  isLoadingPlaylistDetail: boolean
  loadPlaylistDetail: () => Promise<void>

  // tracks
  tracks: Item[]
  currentTrack: string
  isLoadingTracks: boolean
  onClickTrack: (trackId: string) => void
  loadTracks: () => Promise<void>
}

export const useSpotifyStore = create<SpotifyState>((set, get) => {
  return {
    // playlists
    playlists: [],
    currentPlaylist: '',
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

    // playlist detail
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

    // tracks
    tracks: [],
    currentTrack: '',
    isLoadingTracks: true,
    onClickTrack: (trackId: string) => {
      console.log(trackId)
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
})
