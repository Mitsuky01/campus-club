import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="text-center p-6 space-y-4">
      <h2 className="text-2xl font-bold">Welcome to Campus Club Finder</h2>
      <p>Find your people. Join your club.</p>
      <Link to="/clubs" className="bg-blue-600 text-white px-4 py-2 rounded">
        Explore Clubs
      </Link>
    </div>
  )
}
