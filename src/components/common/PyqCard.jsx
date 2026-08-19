import { Link } from "react-router-dom";

export default function PyqCard({ branch, semester, year, subject, size, downloadLink, isNew }) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg sm:p-5 md:p-6">
      
      <div>
        {/* Header: Title and Badge */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-2 text-base font-bold leading-snug text-slate-900 sm:text-lg md:text-xl">
            {subject}
          </h3>
          {isNew && (
            <span className="inline-flex shrink-0 items-center rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20 sm:text-xs">
              New
            </span>
          )}
        </div>

        {/* Meta Information (Branch, Semester, Year) */}
        <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-600 sm:text-sm">
          <span className="font-semibold text-slate-800">{branch}</span>
          <span className="text-slate-300">&bull;</span>
          <span>{semester}</span>
          <span className="text-slate-300">&bull;</span>
          <span>{year}</span>
        </div>

        {/* File Size */}
        <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500 sm:text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 text-blue-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
          {size}
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-5 border-t border-slate-100 pt-4 sm:mt-6">
        <a 
          href={downloadLink} 
          download 
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-50 px-4 py-2.5 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-base"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 sm:h-5 sm:w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Download PDF
        </a>
      </div>
      
    </article>
  );
}