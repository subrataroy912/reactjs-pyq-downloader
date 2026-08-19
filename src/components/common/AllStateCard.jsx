import { Link } from 'react-router-dom'

function ComingSoonIcon() {
  return (
    <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-blue-50 text-slate-500 sm:mb-6 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36">
      <svg viewBox="0 0 64 64" className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20" fill="none" aria-hidden="true">
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
    <div className="flex min-h-[260px] flex-col items-center rounded-2xl border border-slate-200 bg-white px-4 py-6 text-center shadow-[0_8px_24px_rgba(15,23,42,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(15,23,42,0.12)] sm:min-h-[300px] sm:px-6 sm:py-8 lg:min-h-[330px] lg:px-8 lg:py-9">
      {disabled ? (
        <ComingSoonIcon />
      ) : (
        <img src={logoSrc} alt={`${title} logo`} className="mb-5 h-24 w-24 object-contain sm:mb-6 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:mb-7 lg:h-36 lg:w-36" />
      )}

      <h2 className="text-2xl font-extrabold tracking-tight text-black sm:text-3xl">{title}</h2>
      {!disabled && <p className="mt-2 text-base font-medium uppercase tracking-wide text-slate-500 sm:text-lg md:text-xl">{stateName}</p>}

      <span className={`mt-auto inline-flex w-full items-center justify-center rounded-xl px-3 py-3 text-sm font-medium sm:px-4 sm:text-base lg:px-5 lg:py-4 ${disabled ? 'bg-slate-100 text-slate-600' : 'bg-sky-300 text-white hover:bg-sky-400'}`}>
        Click to view/download all previous year question papers
      </span>
    </div>
  )

  if (disabled) return <div aria-disabled="true">{cardContent}</div>

  return <Link to={linkTo}>{cardContent}</Link>
}
