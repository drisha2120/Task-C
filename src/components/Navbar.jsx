
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="border-b border-gray-300 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">

        {/* Website name */}
        <Link to="/" className="text-2xl font-bold text-teal-600">
          DEV@Deakin
        </Link>

        {/* Search bar */}
        <div className="flex flex-1 gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-md border border-gray-300 px-4 py-2"
          />

          <button
            type="button"
            className="rounded-md bg-teal-600 px-4 py-2 text-white hover:bg-teal-700"
          >
            Search
          </button>
        </div>

        {/* Login and Post buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-md border border-teal-600 px-4 py-2 text-teal-600 hover:bg-teal-50"
          >
            Login
          </Link>

          <Link
            to="/new-post"
            className="rounded-md bg-teal-600 px-4 py-2 text-white hover:bg-teal-700"
          >
            Post
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
