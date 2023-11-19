import Image from 'next/image'

interface PlaylistItemProps {
  name: string
  owner: string
  image: string
}

export function PlaylistItem({ name, owner, image }: PlaylistItemProps) {
  return (
    <li className="cursor-pointer p-2 flex items-center gap-3 bg-spotifyGray700 hover:bg-spotifyGray600 rounded">
      <Image
        src={image ?? ''}
        alt=""
        width={48}
        height={48}
        className="rounded"
      />
      <div className="flex flex-col gap-1">
        <span className="truncate text-white">{name}</span>
        <span className="text-xs truncate text-spotifyGray300">
          Playlist • {owner}
        </span>
      </div>
    </li>
  )
}
