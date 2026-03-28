const workSamples: WorkSample[] = [
  {
    title: "Student Wellness Hub",
    tags: "Course: Web App Development in Java | Stack: Spring Boot, Java, PostgreSQL, Docker",
    description: "Group based project in which we learned to develop various microservices for a web app "
      + "that served as a hub for student wellness resources, events, and goal tracking. Personal focus "
      + "was the wellness resource service, focusing on writing proper RESTful APIs and managing a database.",
    link: "https://github.com/MatthewMacalaladGBC/comp3095-student-wellness-hub/",
  },
  {
    title: "Travel Planning App",
    tags: "Course: iOS App Development | Stack: SwiftUI",
    description: "A simple travel planning app currently in development, written in SwiftUI. Allows users "
    + "to track trips - add members, create an itinerary, and plan out a budget directly in the app.",
    link: "https://github.com/MatthewMacalaladGBC/travel_planning_app",
  },
]
// ─────────────────────────────────────────────

interface WorkSample {
  title: string
  tags: string
  description: string
  link: string
}

function WorkSampleCard({ title, tags, description, link }: WorkSample) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="text-xs text-indigo-600 font-medium">{tags}</p>
        </div>
        {link && (
          <a href={link} target="_blank" rel="noreferrer" className="shrink-0 text-sm text-indigo-600 hover:underline">
            View →
          </a>
        )}
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

const capstoneSections: CapstoneSection[] = [
  {
    title: "Tech Stack",
    body: "React Native, TypeScript, Spring Boot, Java, PostgreSQL, Docker, Postman, Git"
  },
  {
    title: "Project Summary",
    body: "Noveltea is a mobile app that is designed to make reading more fun, social and rewarding. "
    + "The main goal of the social platform is to not only allow users to track their own reading, but also "
    + "leave reviews, create book clubs, and follow / view other users on the app. Doing so helps to make "
    + "the reading experience more interactive and engaging, but helps bring more likeminded people together to "
    + "discuss and debate different novels. We aim to transform what is generally a solitary experience into "
    + "something that encourages social interaction."
  },
  {
    title: "System Implementation",
    body: "Screenshots of the current working implementation of the Noveltea app, as seen in Android emulation.",
    images: [
      "/portfolio/capstone/homepage.png",
      "/portfolio/capstone/profile.png",
      "/portfolio/capstone/book_details.png"
    ]
  }
]
// ─────────────────────────────────────────────

interface CapstoneSection {
  title: string
  body?: string
  images?: string[]
}

export default function Projects() {
  return (
    <div className="space-y-8">

      <div className="border-b border-gray-200 pb-8">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Projects & Academic Work</h1>
      </div>

      {/* ── Academic Work Samples ── */}
      <section className="space-y-5">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Academic Work Samples</h2>
          <p className="text-sm text-gray-500 mt-1">Examples of Academic Work.</p>
        </div>

        <div className="space-y-5">
          {workSamples.map((sample, i) => (
            <WorkSampleCard key={i} {...sample} />
          ))}
        </div>
      </section>

      {/* ── Capstone Project ── */}
      <section className="space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Capstone Project</h2>
            <p className="text-base font-semibold text-indigo-600 mt-1">Noveltea - a book tracking social platform</p>
          </div>
          <a href="https://github.com/MatthewMacalaladGBC/Noveltea_app" target="_blank" rel="noreferrer" className="shrink-0 text-sm font-bold text-indigo-600 hover:underline">
            View →
          </a>
        </div>

        <div className="space-y-5">
          {capstoneSections.map((section) => (
            <div key={section.title} className="bg-white border border-gray-200 rounded-xl p-6 space-y-3">
              <h3 className="font-semibold text-gray-900">{section.title}</h3>
              {section.body && (
                <p className="text-base text-gray-600">{section.body}</p>
              )}
              {section.images && section.images.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                  {section.images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${section.title} screenshot ${i + 1}`}
                      className="w-full rounded-lg border border-gray-200 object-cover"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
