import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex justify-between max-w-6xl mx-auto">
        <h1 className="font-bold text-xl">Campus Club</h1>
        <div className="space-x-4">
          <NavLink to="/" className={({ isActive }) => isActive ? 'underline' : ''}>Home</NavLink>
          <NavLink to="/clubs" className={({ isActive }) => isActive ? 'underline' : ''}>Clubs</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'underline' : ''}>About</NavLink>
        </div>
      </div>
    </nav>
  )
}
