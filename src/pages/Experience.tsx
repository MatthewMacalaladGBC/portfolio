export default function Experience() {
  return (
    <div className="space-y-12">

      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Experience & Recognition</h1>
      </div>

      {/* ── Professional Work Samples ── */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Professional Work Samples</h2>
          <p className="text-sm text-gray-500 mt-1">Temp text.</p>
        </div>

        {[1, 2, 3].map((n) => (
          <div key={n} className="bg-white border border-gray-200 rounded-xl p-6 space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                {/* TODO: Replace with project / task title */}
                <h3 className="font-semibold text-gray-900">
                  Professional Sample {n}: TODO - Title
                </h3>
                {/* TODO: Replace with employer name and dates */}
                <p className="text-xs text-indigo-600 font-medium">
                  TODO: Employer · Month Year – Month Year
                </p>
              </div>
              {/* TODO: Link to artifact, repo, or case study if avaliable */}
              <a href="#" className="shrink-0 text-sm text-indigo-600 hover:underline">
                View →
              </a>
            </div>
            {/* TODO: Describe the work */}
            <p className="text-sm text-gray-400 italic">
              TODO: Describe the work sample; what I did, importance, outcome(s), etc.
            </p>
          </div>
        ))}
      </section>

      {/* ── Community Service / Volunteer Work ── */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Community Service & Volunteer Work</h2>
        </div>

        {[1, 2].map((n) => (
          <div key={n} className="bg-white border border-gray-200 rounded-xl p-6 space-y-2">
            <div className="space-y-1">
              {/* TODO: Replace with organization / event name */}
              <h3 className="font-semibold text-gray-900">
                TODO: Organization / Event Name
              </h3>
              {/* TODO: Replace with role and dates */}
              <p className="text-xs text-indigo-600 font-medium">
                TODO: My Role · Month Year – Month Year
              </p>
            </div>
            {/* TODO: Describe what I did and its impact */}
            <p className="text-sm text-gray-400 italic">
              TODO: Describe your contributions, hours, and the impact of this volunteer experience.
            </p>
          </div>
        ))}
      </section>

      {/* ── Awards & Recognition ── */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Awards & Recognition</h2>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-100">
          {[1, 2, 3].map((n) => (
            <div key={n} className="px-6 py-4 flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                {/* TODO: Replace with award name */}
                <p className="font-medium text-gray-900">TODO: Award / Recognition Name</p>
                {/* TODO: Replace with where awards is from */}
                <p className="text-sm text-gray-400 italic">TODO: Issuing Organization · Year</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
