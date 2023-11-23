/* eslint-disable react-hooks/rules-of-hooks */
import { IPlaylistDetailResponse, Item, Track } from '@/interfaces/tracks'
import { api } from '@/services/api'
import { create } from 'zustand'
import { IPlaylist } from '@/interfaces/playlist'

interface SpotifyState {
  // playlists
  playlists: IPlaylist[]
  currentPlaylist: string | null
  isLoadingPlaylists: boolean
  onClickPlaylist: (playlistId: string) => void
  loadPlaylists: () => Promise<void>

  // playlist detail
  playlist: IPlaylistDetailResponse | null
  isLoadingPlaylistDetail: boolean
  loadPlaylistDetail: () => Promise<void>

  // tracks
  tracks: Item[]
  currentTrack: string | null
  isLoadingTracks: boolean
  onClickTrack: (trackId: string, trackFile: string) => void
  loadTracks: () => Promise<void>

  // playlist detail
  track: Track | null
  isLoadingTrackDetail: boolean
  loadTrackDetail: () => Promise<void>

  // player
  isPlaying: boolean
  activeTrackFile: HTMLAudioElement | null
  currentTime: number
  duration: number
  volume: number
  onPlay: () => void
  onPause: () => void
  onChangeVolume: (volume: number) => void
}

export const useSpotifyStore = create<SpotifyState>((set, get) => {
  return {
    // playlists
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

    // playlist detail
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

    // player
    isPlaying: false,
    duration: 0,
    currentTime: 0,
    activeTrackFile: null,
    volume: 0.05,
    onPlay() {
      set({
        isPlaying: true,
      })
      const { activeTrackFile, volume } = get()

      if (activeTrackFile) {
        activeTrackFile.volume = volume
      }

      activeTrackFile?.play()
    },
    onPause() {
      set({
        isPlaying: false,
      })
      const { activeTrackFile } = get()

      activeTrackFile?.pause()
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
  }
})
