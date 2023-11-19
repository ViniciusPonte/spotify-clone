export interface Image {
  url: string
  height: number
  width: number
}

export interface Owner {
  external_urls: {
    spotify: string
  }
  followers: {
    href: string
    total: number
  }
  href: string
  id: string
  type: string
  uri: string
  display_name: string
}

export interface IPlaylist {
  collaborative: boolean
  description: string
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  images: Image[]
  name: string
  owner: Owner
  public: boolean
  snapshot_id: string
  tracks: {
    href: string
    total: number
  }
  type: string
  uri: string
}

export interface IPlaylistsResponse {
  message: string
  playlists: {
    href: string
    limit: number
    next: string
    offset: number
    previous: null
    total: number
    items: IPlaylist[]
  }
}
