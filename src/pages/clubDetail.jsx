import { useParams } from 'react-router-dom'
import { clubs } from '../data/clubs'
import { useState, useEffect } from 'react'

export default function ClubDetail() {
  const { clubId } = useParams()
  const club = clubs.find(c => c.id === clubId)
  const [joined, setJoined] = useState(false)

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('joinedClubs') || '[]')
    setJoined(stored.includes(clubId))
  }, [clubId])

  const handleJoin = () => {
    const stored = JSON.parse(localStorage.getItem('joinedClubs') || '[]')
    if (!stored.includes(clubId)) {
      stored.push(clubId)
      localStorage.setItem('joinedClubs', JSON.stringify(stored))
      setJoined(true)
    }
  }

  if (!club) return <p className="p-6">Club not found.</p>

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold">{club.name}</h2>
      <img src={club.image} alt={club.name} className="w-full max-w-md rounded" />
      <p>{club.description}</p>
      <ul className="list-disc pl-5">
        {club.events.map((e, i) => (
          <li key={i}>{e.name} – {e.date}</li>
        ))}
      </ul>
      {joined ? (
        <p className="text-green-600 font-semibold">You’ve joined this club.</p>
      ) : (
        <button onClick={handleJoin} className="bg-green-600 text-white px-4 py-2 rounded">Join Club</button>
      )}
    </div>
  )
}
