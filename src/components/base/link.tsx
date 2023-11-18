import { ElementType } from 'react'
interface LinkProps {
  icon: ElementType
  text: string
}

export function Link({ icon: Icon, text }: LinkProps) {
  return (
    <a href="" className="flex gap-5 items-center h-10 px-2">
      <Icon className="w-5 h-5 text-white" />
      <span className="bold text-white">{text}</span>
    </a>
  )
}
