import React from 'react';

export default function PyqCard({ branch, year,subject,downloadLink }) {
    return (
        <div className="flex flex-col h-full bg-white border border-gray-100 rounded-2xl shadow-sm p-5 sm:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            
            {/* Top Section / Details */}
            <div className="flex-grow">
                {/* Modern Pill Badge */}
                <span className="inline-flex items-center bg-blue-50 text-blue-700 border border-blue-100 text-xs font-bold px-2.5 py-1 rounded-full mb-3">
                    {year}
                </span>
                
                {/* Title with subtle hover color change */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-2 mb-1 group-hover:text-blue-600 transition-colors">
                    {branch}
                </h3>
                
                <p className="text-sm text-gray-500 mb-6">
                   {subject}
                </p>
            </div>

            {/* Download Button */}
            <a 
                href={downloadLink}
                download
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 active:scale-95 shadow-sm hover:shadow-md focus:ring-4 focus:ring-blue-100 focus:outline-none"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
            </a>
        </div>
    );
}