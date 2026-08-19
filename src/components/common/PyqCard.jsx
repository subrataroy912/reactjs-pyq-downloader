export default function PyqCard({ branch, semester, year, subject, size, downloadLink, isNew }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-5 lg:p-6">
      <div className="mb-3 flex items-start justify-between gap-3 sm:mb-4">
        <h3 className="text-xl font-extrabold leading-tight text-slate-950 sm:text-2xl lg:text-3xl">{subject}</h3>
        {isNew && <span className="shrink-0 rounded-lg bg-emerald-500 px-2.5 py-1.5 text-sm font-bold text-white sm:px-3 sm:py-2 sm:text-base lg:text-lg">New</span>}
      </div>

      <p className="mb-4 text-base text-slate-700 sm:text-lg lg:mb-5 lg:text-xl">{branch} &bull; {semester} &bull; {year}</p>
      <p className="mb-5 flex items-center gap-2 text-base text-slate-700 sm:text-lg lg:mb-6 lg:gap-3 lg:text-xl">
        <span className="text-blue-600">▤</span> {size}
      </p>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <a href={downloadLink} target="_blank" rel="noreferrer" className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-base font-bold text-blue-700 hover:bg-blue-100 sm:text-lg lg:gap-3 lg:px-4 lg:py-3 lg:text-xl">
          <span>◉</span> View
        </a>
        <a href={downloadLink} download className="flex min-h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-base font-bold text-white shadow-sm hover:bg-blue-700 sm:text-lg lg:gap-3 lg:px-4 lg:py-3 lg:text-xl">
          <span>⇩</span> Download
        </a>
      </div>
    </article>
  )
}
