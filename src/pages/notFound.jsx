import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="text-center p-6">
      <h2 className="text-2xl font-bold">404 – Page Not Found</h2>
      <Link to="/" className="text-blue-600 underline">Back to Home</Link>
    </div>
  )
}
