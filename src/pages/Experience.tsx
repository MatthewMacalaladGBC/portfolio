// ─────────────────────────────────────────────
// PROFESSIONAL WORK SAMPLES
// Each object = one card. Add more objects to add more samples.
// Set link to undefined if there is no URL.
// ─────────────────────────────────────────────
interface WorkSample {
  title: string
  employer: string
  dates: string
  description: string
}

const workSamples: WorkSample[] = [
  {
    title: "Software Engineer in Test",
    employer: "Bunch Live",
    dates: "May 2022 – Sep. 2022",
    description: "Assisted in testing of various manual and automated processes of mobile app."
  },
  {
    title: "QA / Automation Dev Co-op",
    employer: "Prodigy Education",
    dates: "Sep. 2021 – Dec. 2021",
    description: "Designed and trialed automation tests, and worked on scenario design / test cycles."
  },
  {
    title: "Quality Assurance Intern",
    employer: "Home Trust Company",
    dates: "Jan. 2020 – Apr. 2020",
    description: "Found, logged and reported defects across multiple platforms."
  },
]
// ─────────────────────────────────────────────

export default function Experience() {
  return (
    <div className="space-y-8">

      <div className="border-b border-gray-200 pb-8">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Experience & Recognition</h1>
      </div>

      {/* ── Professional Work Samples ── */}
      <section className="space-y-5">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Professional Work Samples</h2>
          <p className="text-sm text-gray-500 mt-1">Brief descriptions of previous relevant work experience. Further details can be viewed in the Resume page</p>
        </div>

        {workSamples.map((s, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h3 className="font-semibold text-gray-900">{s.title}</h3>
                <p className="text-xs text-indigo-600 font-medium">{s.employer} · {s.dates}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">{s.description}</p>
          </div>
        ))}
      </section>

      {/* ── Community Service / Volunteer Work ── */}
      <section className="space-y-5">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Community Service & Volunteer Work</h2>
        </div>

        {[1].map((n) => (
          <div key={n} className="bg-white border border-gray-200 rounded-xl p-6 space-y-2">
            <div className="space-y-1">
              <h3 className="font-semibold text-gray-900">
                St. Ann's Parish Food Bank
              </h3>
              <p className="text-xs text-indigo-600 font-medium">
                Food Bank Volunteer · Oct. 2015 – Feb. 2019
              </p>
            </div>
            <p className="text-sm text-gray-400 italic">
              Worked independently and with team to organize and clean the food bank area,
              as well as aided with guiding clients through and assisting new volunteers.
            </p>
          </div>
        ))}
      </section>

    </div>
  )
}
