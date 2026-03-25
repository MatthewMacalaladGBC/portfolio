import { NavLink, Outlet } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/resume', label: 'Resume' },
]

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <NavLink to="/" className="text-lg font-semibold text-gray-900 tracking-tight">
            Matthew Macalalad
          </NavLink>
          <div className="flex gap-6 text-sm font-medium">
            {navLinks.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  isActive
                    ? 'text-indigo-600'
                    : 'text-gray-500 hover:text-gray-900 transition-colors'
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        <Outlet />
      </main>

      <footer className="border-t border-gray-200 mt-16">
        <div className="max-w-5xl mx-auto px-6 py-6 text-sm text-gray-400 text-center">
          {/* POPULATE LINKS HERE */}
          Matthew Macalalad · <a href="#" className="hover:text-gray-600">GitHub</a> · <a href="#" className="hover:text-gray-600">LinkedIn</a>
        </div>
      </footer>
    </div>
  )
}
