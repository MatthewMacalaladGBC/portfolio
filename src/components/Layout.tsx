import { NavLink, Outlet } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

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
        <nav className="px-16 h-14 flex items-center justify-between">
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

      <main className="px-16 py-8">
        <Outlet />
      </main>

      <footer className="border-t border-gray-200 mt-16">
        <div className="px-16 py-6 text-sm text-gray-400 flex items-center justify-center gap-4">
          <span>Matthew Macalalad</span>
          <a href="https://github.com/MatthewMacalaladGBC" target="_blank" rel="noreferrer" className="hover:text-gray-700 transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/matthew-macalalad/" target="_blank" rel="noreferrer" className="hover:text-gray-700 transition-colors">
            <FaLinkedin size={20} />
          </a>
        </div>
      </footer>
    </div>
  )
}
