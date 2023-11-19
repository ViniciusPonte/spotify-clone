import { ComponentProps } from 'react'

interface PauseIconProps extends ComponentProps<'button'> {
  size?: number
  bgColor?: string
}

export function PauseIcon({
  size = 36,
  bgColor = 'bg-white',
  onClick,
}: PauseIconProps) {
  return (
    <button
      className="outline-none bg-transparent cursor-pointer"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size.toString()}
        className={`bi bi-play-circle ${bgColor} rounded-full cursor-pointer hover:scale-105`}
        height={size.toString()}
        fill="black"
        viewBox="0 0 16 16"
      >
        <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z" />
      </svg>
    </button>
  )
}
