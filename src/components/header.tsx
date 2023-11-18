import Image from 'next/image'

export function Header() {
  return (
    <div className="w-full flex items-center justify-end">
      <Image
        src="https://github.com/ViniciusPonte.png"
        alt=""
        height={36}
        width={36}
        className="rounded-full border-black border-2 w-9 h-9 cursor-pointer hover:scale-105"
      />
    </div>
  )
}
