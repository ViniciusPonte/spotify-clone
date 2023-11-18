import Image from 'next/image'

export function PlaylistDetails() {
  return (
    <div className="flex gap-5 items-end mt-10">
      <Image
        src="https://preview.redd.it/rnqa7yhv4il71.jpg?width=640&crop=smart&auto=webp&s=819eb2bda1b35c7729065035a16e81824132e2f1"
        alt=""
        width={232}
        height={232}
        className="rounded"
      />
      <div className="flex flex-col gap-2">
        <span className="text-sm">Playlist</span>
        <span className="text-[6rem] leading-[96px] font-bold">
          Músicas Curtidas
        </span>
        <div className="flex items-center gap-1 mt-8  text-sm">
          <Image
            src="https://github.com/ViniciusPonte.png"
            alt=""
            height={24}
            width={24}
            className="rounded-full w-6 h-6"
          />
          <span className="font-semibold">Vinícius Ponte</span>{' '}
          <span>• 2.036 músicas</span>
        </div>
      </div>
    </div>
  )
}
