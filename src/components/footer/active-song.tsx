import Image from 'next/image'

export function ActiveSong() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="https://upload.wikimedia.org/wikipedia/pt/0/08/Justin_Bieber_-_Justice.png"
        alt=""
        width={56}
        height={56}
        className="rounded"
      />
      <div className="flex flex-col gap-1">
        <span className="text-white text-sm">Anyone</span>
        <span className="text-xs text-spotifyGray300">Justin Bieber</span>
      </div>
    </div>
  )
}
