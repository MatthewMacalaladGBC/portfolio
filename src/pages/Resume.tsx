export default function Resume() {
  return (
    <div className="space-y-6">

      <div className="border-b border-gray-200 pb-8">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Resume & Cover Letter</h1>
      </div>

      {/* ── Resume ── */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Resume</h2>
          <a
            href="#"
            className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Download PDF
          </a>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden h-[700px]">
          <iframe src="/portfolio/Résumé.pdf" className="w-full h-full" />
        </div>
      </section>

      {/* ── Cover Letter Template ── */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900">Cover Letter (Template)</h2>
        <p className="text-sm text-gray-500">
          Cover letter for x position [STILL NEED TO DO]
        </p>

        <div className="bg-white border border-gray-200 rounded-xl p-8 space-y-6 font-serif text-gray-700 text-sm leading-relaxed">
          {/* TODO: Replace all placeholder text with actual cover letter */}

          <div className="space-y-1">
            <p className="text-gray-400 italic">[TODO: Name]</p>
            <p className="text-gray-400 italic">[TODO: Address]</p>
            <p className="text-gray-400 italic">[TODO: City, Province, Postal Code]</p>
            <p className="text-gray-400 italic">[TODO: Email · Phone Number]</p>
            <p className="text-gray-400 italic">[TODO: Date]</p>
          </div>

          <div className="space-y-1">
            <p className="text-gray-400 italic">[TODO: Hiring Manager's Name]</p>
            <p className="text-gray-400 italic">[TODO: Company Name]</p>
            <p className="text-gray-400 italic">[TODO: Company Address]</p>
          </div>

          <p className="text-gray-400 italic">Dear [TODO: Hiring Manager / Team],</p>

          <p className="text-gray-400 italic">
            [TODO: Opening paragraph.]
          </p>

          <p className="text-gray-400 italic">
            [TODO: Body paragraph 1.]
          </p>

          <p className="text-gray-400 italic">
            [TODO: Body paragraph 2.]
          </p>

          <p className="text-gray-400 italic">
            [TODO: Closing paragraph.]
          </p>

          <div>
            <p className="text-gray-400 italic">Sincerely,</p>
            <p className="text-gray-400 italic mt-4">Matthew Macalalad</p>
          </div>
        </div>
      </section>

    </div>
  )
}
