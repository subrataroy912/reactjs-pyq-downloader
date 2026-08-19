export default function PyqCard({ branch, semester, year, subject, size, downloadLink, isNew }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="text-3xl font-extrabold leading-tight text-slate-950">{subject}</h3>
        {isNew && <span className="rounded-lg bg-emerald-500 px-3 py-2 text-lg font-bold text-white">New</span>}
      </div>

      <p className="mb-5 text-xl text-slate-700">{branch} &bull; {semester} &bull; {year}</p>
      <p className="mb-6 flex items-center gap-3 text-xl text-slate-700">
        <span className="text-blue-600">▤</span> {size}
      </p>

      <div className="grid grid-cols-2 gap-4">
        <a href={downloadLink} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 rounded-lg border border-blue-100 bg-blue-50 px-4 py-3 text-xl font-bold text-blue-700 hover:bg-blue-100">
          <span>◉</span> View
        </a>
        <a href={downloadLink} download className="flex items-center justify-center gap-3 rounded-lg bg-blue-600 px-4 py-3 text-xl font-bold text-white shadow-sm hover:bg-blue-700">
          <span>⇩</span> Download
        </a>
      </div>
    </article>
  )
}
