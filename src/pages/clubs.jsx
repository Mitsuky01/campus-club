import { useState } from 'react'
import { clubs } from '../data/clubs'
import { Link } from 'react-router-dom'

export default function Clubs() {
  const [sort, setSort] = useState('az')

  const sortedClubs = [...clubs].sort((a, b) =>
    sort === 'az' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  )

  return (
    <div className="p-6">
      <div className="mb-4 flex gap-4">
        <select value={sort} onChange={e => setSort(e.target.value)} className="border p-2 rounded">
          <option value="az">Sort: A–Z</option>
          <option value="za">Sort: Z–A</option>
        </select>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {sortedClubs.map(club => (
          <Link key={club.id} to={`/clubs/${club.id}`} className="p-4 border rounded hover:shadow">
            <img src={club.image} alt={club.name} className="w-full h-48 object-cover rounded mb-2" />
            <h3 className="text-lg font-bold">{club.name}</h3>
            <p>{club.shortDescription}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
