interface WorkSampleProps {
  number: number
}

function WorkSampleCard({ number }: WorkSampleProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          {/* TODO: Replace project title */}
          <h3 className="font-semibold text-gray-900">
            Work Sample {number}: TODO - Project Title
          </h3>
          {/* TODO: Fill tech stack / course / work position / etc. */}
          <p className="text-xs text-indigo-600 font-medium">TODO: Tech Stack / Course</p>
        </div>
        {/* TODO: Add link to project repo or demo if applicable */}
        <a href="#" className="shrink-0 text-sm text-indigo-600 hover:underline">
          View →
        </a>
      </div>
      {/* TODO: 2–3 sentence description of the project and my role */}
      <p className="text-sm text-gray-400 italic">
        TODO: Describe the project.
      </p>
    </div>
  )
}

interface CapstoneSection {
  title: string
}

// Maybe cut down to most important? summary / vision, mockups, screenshots of app, etc.
const capstoneSections: CapstoneSection[] = [
  { title: 'Project Summary' },
  { title: 'Project Vision' },
  { title: 'Business Requirements' },
  { title: 'Project Plan' },
  { title: 'Requirements Analysis & Design' },
  { title: 'Wireframes / Mockups' },
  { title: 'Status Reports' },
  { title: 'System Implementation' },
]

export default function Projects() {
  return (
    <div className="space-y-12">

      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Projects & Academic Work</h1>
      </div>

      {/* ── Academic Work Samples ── */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Academic Work Samples</h2>
          <p className="text-sm text-gray-500 mt-1">Brief description (min 3 samples?).</p>
        </div>

        <div className="space-y-4">
          {[1, 2, 3].map((n) => (
            <WorkSampleCard key={n} number={n} />
          ))}
        </div>
      </section>

      {/* ── Capstone Project ── */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Capstone Project</h2>
          {/* TODO: Replace with capstone project title */}
          <p className="text-sm text-gray-500 mt-1">TODO: Capstone Project Title</p>
        </div>

        <div className="space-y-4">
          {capstoneSections.map(({ title}) => (
            <div key={title} className="bg-white border border-gray-200 rounded-xl p-6 space-y-2">
              <h3 className="font-semibold text-gray-900">{title}</h3>
              {/* TODO: Replace with actual content */}
              <p className="text-sm text-gray-400 italic">TODO</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
