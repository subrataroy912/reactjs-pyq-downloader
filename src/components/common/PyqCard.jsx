import { Link } from "react-router-dom";

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

      <div className="flex items-center justify-center w-full gap-4">
        <a href={downloadLink} download className="flex items-center justify-center gap-3 rounded-lg bg-blue-600 px-4 py-3 text-xl font-bold text-white shadow-sm hover:bg-blue-700">
          <span>⇩</span> Download
        </a>
      </div>
    </article>
  )
}
