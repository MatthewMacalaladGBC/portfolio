export default function About() {
  return (
    <div className="space-y-6">

      <div className="border-b border-gray-200 pb-8">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">About Me</h1>
      </div>

      {/* ── Bio ── */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Bio</h2>
        <div className="bg-white border border-gray-200 rounded-xl p-6 flex gap-8 items-start">
          <div className="flex-1 space-y-3">
            <p className="text-gray-500 italic text-sm">
              My name is Matthew Macalalad, a third-year Computer Programming & Analysis student
              at George Brown Polytechnic, with a focus on full-stack development and application
              design. Over the course of my studies and various co-op opportunities, I have built
              experience with technologies like React, TypeScript and JavaScript, SQL, and Docker,
              as well as with what it is like working in a real Agile workplace environment.
            </p>
            <p className="text-gray-500 italic text-sm">
              I am currently looking for opportunities to expand my skillset and contribute in a
              professional environment, whether through an internship or an entry-level role. I bring a curious
              attitude and a willingness to learn, and am not afraid to ask questions when there's something
              I don't understand - I value an environment in which people can share their experiences openly. 
              Outside of all of the technical things, a recent goal of mine is to try and step outside of my comfort 
              zone more, and welcome the chance to connect with anyone willing to do the same.
            </p>
          </div>

          <div className="shrink-0">
            <img
              src="/portfolio/photo.jpg"
              alt="Profile photo"
              className="w-40 h-40 rounded-full object-cover border-2 border-gray-900"
              onError={(e) => {
                const t = e.currentTarget
                t.style.display = 'none'
                t.nextElementSibling?.removeAttribute('hidden')
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Career Philosophy ── */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Career Philosophy</h2>
        <p className="text-sm text-gray-500">
            Everything you do, do it wholeheartedly, or not at all.
        </p>
        <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3">
        <p className="text-gray-500 italic text-sm">
            My approach to my professional career is very similar to how I have always lived;
            if it is something I want to do and enjoy doing, I will do it thoroughly and enthusiastically.
            That said, this approach hasn't always served me well; early on in my life, it made it hard to
            do the things that I needed to that weren't quite as interesting to me. But as time went on
            I figured out that the best way to overcome this wasn't changing this philosophy that was 
            so deeply ingrained; instead I learned how to love to learn.
        </p>
        <p className="text-gray-500 italic text-sm">
            Rather than seeing a menial task as boring or uninteresting, I saw it as a challenge to learn
            how best to optimize it. Naturally, the less I initially enjoyed something, the less I was likely
            to know about it, which allowed me to view it with a lens of opportunity. Programming, fortunately,
            was something I already gravitated toward, but in a field in which technologies are always changing, 
            there is always another opportunity to learn. Everything here is a problem with near limitless 
            solutions, and that openness means the learning never truly stops.
        </p>
        </div>
      </section>

      {/* ── Academic Credentials ── */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Academic Credentials</h2>

        <div className="space-y-3">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="text-lg text-gray-900 font-bold">
              Ontario College Advanced Diploma
            </p>
            <p className="text-base text-gray-400 italic">
              Computer Programming & Analysis
            </p>
            <p className="text-base text-gray-600">
              George Brown Polytechnic · Expected Graduation Date: April 2026
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Contact & Links</h2>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-lg font-bold text-gray-800">Email</dt>
              <dd className="text-base text-gray-400">matthewmacalalad2012@gmail.com</dd>
            </div>
            <div>
              <dt className="text-lg font-bold text-gray-800">Location</dt>
              <dd className="text-base text-gray-400">Toronto, ON</dd>
            </div>
          </dl>
        </div>
      </section>

    </div>
  )
}
