import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="space-y-6">

      {/* ── Hero ── */}
      <section className="py-16 border-b border-gray-200">
        <p className="text-sm font-bold text-indigo-600 mb-2 uppercase tracking-widest">
          Portfolio
        </p>
        <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-2">
          Matthew Macalalad
        </h1>
        <p className="text-lg text-gray-500 mb-5">
          George Brown Polytechnic, Computer Programming & Analysis
        </p>
        <p className="text-xl text-indigo-600 leading-relaxed mb-8">
          Passionate, driven, and always looking to learn
        </p>
        <div className="flex gap-3 flex-wrap">
          <a
            href="https://github.com/MatthewMacalaladGBC"
            className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 text-base font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/matthew-macalalad/"
            className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 text-base font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* ── Quick nav cards ── */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-5">Explore</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { to: "/about", title: "About", desc: "Bio, career philosophy, and personal details" },
            { to: "/projects", title: "Projects", desc: "Academic work samples and capstone project" },
            { to: "/experience", title: "Experience", desc: "Professional experience, volunteer work, and awards" },
            { to: "/resume", title: "Resume", desc: "Resume and cover letter" },
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
