import { Link } from 'react-router-dom'

function ComingSoonIcon() {
  return (
    <div className="mx-auto mb-7 flex h-36 w-36 items-center justify-center rounded-full bg-blue-50 text-slate-500">
      <svg viewBox="0 0 64 64" className="h-20 w-20" fill="none" aria-hidden="true">
        <path d="M18 10h20l10 10v30a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="M38 10v12h10M22 29h12M22 39h9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="45" cy="43" r="12" fill="#eff6ff" stroke="currentColor" strokeWidth="3" />
        <path d="M45 36v8l5 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

export default function AllStateCard({ logoSrc, title, stateName, linkTo, disabled = false }) {
  const cardContent = (
    <div className={`flex min-h-[330px] flex-col items-center rounded-2xl border border-slate-200 bg-white px-8 py-9 text-center shadow-[0_8px_24px_rgba(15,23,42,0.10)] transition duration-300 ${disabled ? 'cursor-not-allowed opacity-80' : 'hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(15,23,42,0.12)]'}`}>
      {disabled ? (
        <ComingSoonIcon />
      ) : (
        <img src={logoSrc} alt={`${title} logo`} loading="lazy" className="mb-7 h-36 w-36 object-contain" />
      )}

      <h2 className="text-3xl font-extrabold tracking-tight text-black">{title}</h2>
      {!disabled && <p className="mt-2 text-xl font-medium uppercase tracking-wide text-slate-500">{stateName}</p>}

      <span className={`mt-auto inline-flex w-full items-center justify-center rounded-xl px-5 py-4 text-base font-medium ${disabled ? 'bg-slate-100 text-slate-600' : 'bg-sky-300 text-white hover:bg-sky-400'}`}>
        Click to view/download all previous year question papers
      </span>
    </div>
  )

  if (disabled) return <div aria-disabled="true" title="More state boards are coming soon">{cardContent}</div>

  return <Link to={linkTo}>{cardContent}</Link>
}
