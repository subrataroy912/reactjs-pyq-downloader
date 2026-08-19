import { Link, useLocation } from 'react-router-dom'
import BrandIcon from '../common/BrandIcon'

function Navbar() {
  const { pathname } = useLocation()
  const isPapersPage = pathname === '/wb'

  return (
    <header className="sticky top-0 z-20 w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-screen-2xl items-center gap-2 px-3 py-3 sm:gap-3 sm:px-5 md:gap-4 md:px-8 md:py-4">
        {isPapersPage && (
          <Link
            to="/"
            aria-label="Back to home"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-blue-600 transition hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100 sm:h-12 sm:w-12"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </Link>
        )}

        <Link to="/" className="flex min-w-0 items-center gap-3 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-100 sm:gap-4 md:gap-5">
          <BrandIcon className={isPapersPage ? 'h-11 w-11 shrink-0 bg-none bg-white text-blue-600 ring-1 ring-slate-200 sm:h-14 sm:w-14 md:h-16 md:w-16' : 'h-14 w-14 shrink-0 sm:h-16 sm:w-16 md:h-20 md:w-20'} />
          <div className="min-w-0">
            <h1 className={`${isPapersPage ? 'text-xl sm:text-3xl lg:text-4xl xl:text-5xl' : 'text-2xl sm:text-3xl md:text-4xl'} truncate font-extrabold tracking-tight text-slate-950`}>
              {isPapersPage ? 'WBSCTE Previous Year Question Papers' : 'WB Diploma PYQ'}
            </h1>
            {!isPapersPage && <p className="mt-1 truncate text-sm text-slate-600 sm:text-lg md:text-2xl">Previous Year Question Papers</p>}
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Navbar
