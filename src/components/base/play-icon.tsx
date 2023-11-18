interface PlayIconProps {
  size?: number
  bgColor?: string
}

export function PlayIcon({ size = 36, bgColor = 'bg-white' }: PlayIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size.toString()}
      height={size.toString()}
      fill="currentColor"
      className={`bi bi-play-circle ${bgColor} rounded-full cursor-pointer hover:scale-105`}
      viewBox={`0 0 16 16`}
    >
      <path
        d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"
        fill="black"
      />
    </svg>
  )
}
