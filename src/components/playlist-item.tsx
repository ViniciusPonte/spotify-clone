import Image from 'next/image'

export function PlaylistItem() {
  return (
    <li className="cursor-pointer p-2 flex items-center gap-3 bg-spotifyGray700 hover:bg-spotifyGray600 rounded">
      <Image
        src="https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/60/12/93/601293f5-b70a-7252-417c-0e7fc1838a1b/mza_10577955395500101280.jpg/1200x1200bb.jpg"
        alt=""
        width={48}
        height={48}
        className="rounded"
      />
      <div className="flex flex-col gap-1">
        <span className="truncate text-white">Bocadinhas</span>
        <span className="text-xs truncate text-spotifyGray300">
          Playlist • Criador da playlist
        </span>
      </div>
    </li>
  )
}
