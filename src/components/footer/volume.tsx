import { Volume2 } from 'lucide-react'
import { Slider } from '../base/slider'

export function Volume() {
  return (
    <div className="flex gap-2 items-center">
      <Volume2 className="w-5 h-5 text-spotifyGray300 hover:text-white" />
      <Slider variant="sm" />
    </div>
  )
}
