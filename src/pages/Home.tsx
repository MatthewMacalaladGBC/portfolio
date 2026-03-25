import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="space-y-12">

      {/* ── Hero ── */}
      <section className="py-12 border-b border-gray-200">
        <p className="text-sm font-medium text-indigo-600 mb-2 uppercase tracking-widest">
          Portfolio
        </p>
        <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-3">
          Matthew Macalalad
        </h1>
        <p className="text-xl text-gray-500 mb-6">
          TODO: Title / Program
        </p>
        <p className="max-w-2xl text-gray-600 leading-relaxed mb-8">
          TODO: Brief tagline (about me)
        </p>
        <div className="flex gap-3 flex-wrap">
          <Link
            to="/resume"
            className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            View Resume
          </Link>
          <Link
            to="/projects"
            className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            View Projects
          </Link>
          <a
            href="#"
            className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* ── Quick nav cards ── */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Explore</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { to: '/about', title: 'About', desc: 'Bio, career philosophy, and personal details' },
            { to: '/projects', title: 'Projects', desc: 'Academic work samples and capstone project' },
            { to: '/experience', title: 'Experience', desc: 'Professional samples, volunteer work, and awards' },
            { to: '/resume', title: 'Resume', desc: 'Resume PDF and cover letter template' },
          ].map(({ to, title, desc }) => (
            <Link
              key={to}
              to={to}
              className="block p-5 bg-white border border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-sm transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
              <p className="text-sm text-gray-500">{desc}</p>
            </Link>
          ))}
        </div>
      </section>

    </div>
  )
}
