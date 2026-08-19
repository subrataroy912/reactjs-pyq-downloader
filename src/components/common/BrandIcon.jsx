function BrandIcon({ className = "" }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-sky-300 to-blue-500 text-white shadow-sm ${className}`}>
      <svg viewBox="0 0 48 48" className="h-[58%] w-[58%]" fill="none" aria-hidden="true">
        <path d="M10 14.5c0-2 1.7-3.5 3.7-3.2 4.2.6 7.8 2.1 10.3 4.5 2.5-2.4 6.1-3.9 10.3-4.5 2-.3 3.7 1.2 3.7 3.2v21.2c0 1.4-1.2 2.5-2.6 2.3-4.8-.6-8.7.2-11.4 2.4-2.7-2.2-6.6-3-11.4-2.4-1.4.2-2.6-.9-2.6-2.3V14.5Z" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 15.8v24.6" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      </svg>
    </span>
  )
}

export default BrandIcon
