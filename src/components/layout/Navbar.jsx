import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-white border-b border-gray-100 shadow-sm py-3 px-4 sm:px-6 md:px-12 lg:px-20 flex items-center w-full">
      
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-100 rounded-lg p-1"
      >
        <div className="text-xl sm:text-2xl bg-blue-50 p-1.5 sm:p-2 rounded-lg flex items-center justify-center shrink-0">
          📖
        </div>
        
        <div className="flex flex-col">
          <span className="font-bold text-base sm:text-lg md:text-xl text-gray-900 leading-tight">
            WB Diploma PYQ
          </span>
          <span className="text-[10px] sm:text-xs md:text-sm text-gray-500 font-medium truncate max-w-[200px] sm:max-w-none">
            Previous Year Question Papers
          </span>
        </div>
      </Link>
      
    </header>
  );
}

export default Navbar;