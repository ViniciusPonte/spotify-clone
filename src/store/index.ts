/* eslint-disable react-hooks/rules-of-hooks */
import { create } from 'zustand'
import { PlaylistsStore, playlistsStore } from './playlists'
import { PlaylistDetailStore, playlistDetailStore } from './playlistDetail'
import { TracksStore, tracksStore } from './tracks'
import { CurrentTrackStore, currentTrackStore } from './currentTrack'
import { PlayerStore, playerStore } from './player'
interface SpotifyState
  extends PlaylistsStore,
    PlaylistDetailStore,
    TracksStore,
    CurrentTrackStore,
    PlayerStore {}

export type setType = (
  partial:
    | SpotifyState
    | Partial<SpotifyState>
    | ((state: SpotifyState) => SpotifyState | Partial<SpotifyState>),
  replace?: boolean | undefined,
) => void

export type getType = () => SpotifyState

export const useSpotifyStore = create<SpotifyState>((set, get) => {
  return {
    ...playlistsStore(set, get),
    ...playlistDetailStore(set, get),
    ...tracksStore(set, get),
    ...currentTrackStore(set, get),
    ...playerStore(set, get),
  }
})
