export default function About() {
  return (
    <div className="space-y-10">

      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">About Me</h1>
      </div>

      {/* ── Bio ── */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">Bio</h2>
        <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3">
          <p className="text-gray-400 italic text-sm">
            TODO: BIO GOES HERE
          </p>
          <p className="text-gray-400 italic text-sm">
            TODO: 2nd paragraph — expand on interests, skills, etc.
          </p>
        </div>
      </section>

      {/* ── Career Philosophy ── */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">Career Philosophy</h2>
        <p className="text-sm text-gray-500">
            TODO: Professional Values / Goals
        </p>
        <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3">
          {/* TODO: Replace with career philosophy */}
        <p className="text-gray-400 italic text-sm">
            MORE
        </p>
        <p className="text-gray-400 italic text-sm">
            MORE ?
        </p>
        </div>
      </section>

      {/* ── Academic Credentials ── */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">Academic Credentials</h2>

        <div className="space-y-3">
          {/* TODO: Add each degree / certificate / diploma as a card */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="text-sm text-gray-400 italic">
              TODO: Credentials
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="text-sm text-gray-400 italic">
              TODO: Any additional certificates, degrees, or awards
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact / Links ── */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">Contact & Links</h2>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {/* TODO: Fill all placeholders */}
            <div>
              <dt className="font-medium text-gray-700">Email</dt>
              <dd className="text-gray-400 italic">placeholder</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-700">Location</dt>
              <dd className="text-gray-400 italic">placeholder</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-700">LinkedIn</dt>
              <dd className="text-gray-400 italic">placeholder</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-700">GitHub</dt>
              <dd className="text-gray-400 italic">placeholder</dd>
            </div>
          </dl>
        </div>
      </section>

    </div>
  )
}
