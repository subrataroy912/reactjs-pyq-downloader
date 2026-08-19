import { Link, useLocation } from 'react-router-dom'
import BrandIcon from '../common/BrandIcon'

function Navbar() {
  const { pathname } = useLocation()
  const isPapersPage = pathname === '/wb'

  return (
    <header className="sticky top-0 z-20 flex w-full items-center gap-4 border-b border-slate-200 bg-white px-5 py-4 shadow-sm md:px-8">
      {isPapersPage && (
        <Link to="/" aria-label="Back to home" className="text-blue-600 transition hover:text-blue-700">
          <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </Link>
      )}

      <Link to="/" className="flex items-center gap-5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-100">
        <BrandIcon className={isPapersPage ? 'h-16 w-16 bg-none bg-white text-blue-600 ring-1 ring-slate-200' : 'h-20 w-20'} />
        <div>
          <h1 className={`${isPapersPage ? 'text-4xl md:text-5xl' : 'text-4xl'} font-extrabold tracking-tight text-slate-950`}>
            {isPapersPage ? 'WBSCTE Previous Year Question Papers' : 'WB Diploma PYQ'}
          </h1>
          {!isPapersPage && <p className="mt-2 text-2xl text-slate-600">Previous Year Question Papers</p>}
        </div>
      </Link>
    </header>
  )
}

export default Navbar
