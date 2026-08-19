import React from 'react';
import { Link } from 'react-router-dom';

export default function AllStateCard({ 
  logoSrc, 
  title, 
  stateName, 
  linkTo, 
  ctaText = "Click to view/download all previous year question papers" // Default fallback text
}) {
  return (
    <div className="flex flex-col h-full w-full p-5 sm:p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      
      {/* Header Area (Logo & Titles) */}
      <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
        <div className="flex-shrink-0 bg-gray-50 p-2 rounded-full border border-gray-100">
          <img 
            src={logoSrc} 
            alt={`${title} Logo`} 
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
          />
        </div>
        
        <div className="flex flex-col">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
            {title}
          </h2>
          <span className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">
            {stateName}
          </span>
        </div>
      </div>
      
      {/* Call to Action Area (mt-auto pushes button to the bottom) */}
      <div className="mt-auto">
        <Link 
          to={linkTo}
          className="inline-flex items-center justify-center w-full px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-medium text-blue-700 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-center"
        >
          {ctaText}
        </Link>
      </div>
      
    </div>
  );
}