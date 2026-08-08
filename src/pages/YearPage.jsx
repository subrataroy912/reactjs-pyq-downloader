import { useParams } from 'react-router'

function YearPage() {
  const { branchSlug, semesterSlug, subjectSlug, year } = useParams()

  return (
    <div className="min-h-screen bg-slate-100 p-6 text-slate-800">
      <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Year Papers
        </p>
        <h1 className="text-3xl font-bold text-slate-900">
          {branchSlug} / {semesterSlug} / {subjectSlug} / {year}
        </h1>
      </div>
    </div>
  )
}

export default YearPage
