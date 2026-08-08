import { useParams } from 'react-router'

function SubjectDetail() {
  const { branchSlug, semesterSlug, subjectSlug } = useParams()

  return (
    <main className="min-h-screen bg-slate-100 p-6 text-slate-800">
      <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Subject Detail
        </p>
        <h1 className="text-3xl font-bold text-slate-900">
          {branchSlug} / {semesterSlug} / {subjectSlug}
        </h1>
      </div>
    </main>
  )
}

export default SubjectDetail
