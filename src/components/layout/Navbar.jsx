import { Link, useLocation } from 'react-router-dom'
import BrandIcon from '../common/BrandIcon'

function Navbar() {
  const { pathname } = useLocation()
  const isPapersPage = pathname === '/wb'

  return (
    <header className="sticky top-0 z-20 flex w-full items-center gap-2 sm:gap-4 border-b border-slate-200 bg-white/95 backdrop-blur-sm px-4 py-3 shadow-sm md:px-6 md:py-4">
      
      {/* Back Button */}
      {isPapersPage && (
        <Link 
          to="/" 
          aria-label="Back to home" 
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-blue-600 transition-colors hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </Link>
      )}

      {/* Brand Section */}
      <Link 
        to="/" 
        className="flex items-center gap-3 sm:gap-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 p-1"
      >
        <BrandIcon 
          className={`shrink-0 rounded-lg transition-all ${
            isPapersPage 
              ? 'h-10 w-10 sm:h-12 sm:w-12 bg-white text-blue-600 ring-1 ring-slate-200 p-1' 
              : 'h-12 w-12 sm:h-14 sm:w-14'
          }`} 
        />
        
        <div className="flex flex-col justify-center">
          <h1 
            className={`font-bold tracking-tight text-slate-900 ${
              isPapersPage 
                ? 'text-base sm:text-lg md:text-xl line-clamp-2 md:line-clamp-1' 
                : 'text-xl sm:text-2xl md:text-3xl'
            }`}
          >
            {isPapersPage ? 'WBSCTE Previous Year Question Papers' : 'WB Diploma PYQ'}
          </h1>
          
          {/* Subtitle - only shows on the main page */}
          {!isPapersPage && (
            <p className="mt-0.5 text-xs sm:text-sm font-medium text-slate-500">
              Previous Year Question Papers
            </p>
          )}
        </div>
      </Link>
    </header>
  )
}

export default Navbar