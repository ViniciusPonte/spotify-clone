export interface Artist {
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  name: string
  type: string
  uri: string
}

export interface Image {
  height: number
  url: string
  width: number
}

export interface Album {
  album_type: string
  artists: Artist[]
  available_markets: string[]
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  images: Image[]
  name: string
  release_date: string
  release_date_precision: string
  total_tracks: number
  type: string
  uri: string
}

export interface Track {
  album: Album
  artists: Artist[]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  episode: boolean
  explicit: boolean
  external_ids: {
    isrc: string
  }
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  is_local: boolean
  name: string
  popularity: number
  preview_url: string
  track: boolean
  track_number: number
  type: string
  uri: string
}

export interface Item {
  added_at: string
  added_by: {
    external_urls: {
      spotify: string
    }
    href: string
    id: string
    type: string
    uri: string
  }
  is_local: boolean
  primary_color: null
  track: Track
  video_thumbnail: {
    url: null
  }
}

export interface ITracksResponse {
  href: string
  items: Item[]
  limit: 100
  next: null
  offset: 0
  previous: null
  total: 50
}

export interface IPlaylistDetailResponse {
  colaborative: boolean
  description: string
  external_urls: {
    spotify: string
  }
  followers: {
    href: null
    total: number
  }
  href: string
  id: string
  images: Image[]
  name: string
  owner: {
    external_urls: {
      spotify: string
    }
    href: string
    id: string
    type: string
    uri: string
    display_name: string
  }
  public: boolean
  snapshot_id: string
  tracks: ITracksResponse
  type: string
  uri: string
  primary_color: null
}

// total
// item.added_at
// item.album.name
// item.album.images[0]
// item.artists.name
// item.track.duration_ms
// item.track.id
// item.track.preview_url
