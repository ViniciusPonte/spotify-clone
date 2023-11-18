import { Clock, Search } from 'lucide-react'
import { SongItem } from './song-item'
import { PlayIcon } from '../base/play-icon'

export function SongList() {
  return (
    <div className="flex flex-col w-full bg-opacity-30">
      <div className="flex justify-between items-center my-8">
        <PlayIcon size={56} bgColor="bg-spotifyGreen" />
        <button className="cursor-pointer rounded-full hover:bg-spotifyGray550 p-2">
          <Search className="w-4 h-4" />
        </button>
      </div>

      <table className="text-left text-xs font-light text-spotifyGray300 table-fixed">
        <thead className="border-b border-spotifyGray500">
          <tr className="px-4 grid grid-cols-songList gap-4 w-full">
            <td className="pt-3 pb-2 w-8 flex items-center">#</td>
            <td className="pt-3 pb-2 w-30 flex items-center">Título</td>
            <td className="pt-3 pb-2 flex items-center">Albúm</td>
            <td className="pt-3 pb-2 flex items-center">Adicionada em</td>
            <td className="pt-3 pb-2 flex justify-end items-center">
              <Clock className="w-4 h-4 text-spotifyGray300" />
            </td>
          </tr>
        </thead>
        <tbody className="block pt-4">
          <SongItem />
          <SongItem />
          <SongItem />
          <SongItem />
          <SongItem />
          <SongItem />
          <SongItem />
          <SongItem />
          <SongItem />
          <SongItem />
          <SongItem />
          <SongItem />
          <SongItem />
          <SongItem />
          <SongItem />
          <SongItem />
          <SongItem />
          <SongItem />
        </tbody>
      </table>
    </div>
  )
}
