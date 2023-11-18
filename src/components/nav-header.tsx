import { HomeIcon, Search } from 'lucide-react'
import { Link } from './link'

export function NavHeader() {
  return (
    <nav className="bg-spotifyGray700 rounded-lg px-1 py-4 flex flex-col gap-1">
      <Link icon={HomeIcon} text="Home" />
      <Link icon={Search} text="Search" />
    </nav>
  )
}
