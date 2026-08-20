import { useEffect, useMemo, useState } from 'react';
import Dropdown from '../components/common/Dropdown';
import PyqCard from '../components/common/PyqCard';

const papers = [
  ['Mathematics – 1', 'CST', '1st Semester', 'Jan 2025', '1.2 MB', true],
  ['Mathematics – 1', 'CST', '1st Semester', 'Jun 2024', '1.1 MB'],
  ['Physics', 'CST', '1st Semester', 'Jan 2025', '1.3 MB', true],
  ['Chemistry', 'CST', '1st Semester', 'Jun 2024', '1.2 MB'],
  ['Basic Electrical Engineering', 'EE', '3rd Semester', 'Jan 2025', '1.4 MB'],
  ['Analog Electronics', 'ECE', '3rd Semester', 'Jan 2025', '1.3 MB', true],
  ['Data Structures', 'CST', '3rd Semester', 'Jun 2024', '1.2 MB'],
  ['Computer Organization', 'CST', '3rd Semester', 'Jan 2024', '1.1 MB'],
  ['Engineering Mechanics', 'ME', '2nd Semester', 'Jan 2025', '1.2 MB'],
  ['Thermodynamics', 'ME', '2nd Semester', 'Jun 2024', '1.3 MB'],
  ['Communication Skills', 'HM', '1st Semester', 'Jan 2025', '1.0 MB', true],
  ['Environmental Science', 'Common', '2nd Semester', 'Jun 2024', '1.1 MB'],
  ['Surveying', 'CE', '4th Semester', 'Jan 2024', '1.5 MB'],
  ['Microprocessor', 'CST', '4th Semester', 'Jun 2023', '1.4 MB'],
  ['Power System', 'EE', '5th Semester', 'Jan 2023', '1.6 MB'],
  ['Machine Design', 'ME', '5th Semester', 'Jun 2022', '1.5 MB'],
  ['Database Management System', 'CST', '4th Semester', 'Jan 2025', '1.2 MB', true],
  ['Concrete Technology', 'CE', '3rd Semester', 'Jun 2024', '1.3 MB'],
  ['Digital Electronics', 'ECE', '2nd Semester', 'Jan 2024', '1.2 MB'],
  ['Programming in C', 'CST', '2nd Semester', 'Jun 2024', '1.1 MB'],
  ['Electrical Machines', 'EE', '4th Semester', 'Jan 2025', '1.5 MB', true],
  ['Fluid Mechanics', 'ME', '3rd Semester', 'Jun 2023', '1.4 MB'],
  ['Building Materials', 'CE', '2nd Semester', 'Jan 2023', '1.2 MB'],
  ['Industrial Management', 'Common', '6th Semester', 'Jun 2024', '1.0 MB'],
].map(([subject, branch, semester, year, size, isNew], index) => ({
  id: index + 1,
  subject,
  branch,
  semester,
  year,
  size,
  isNew: Boolean(isNew),
  downloadLink: '',
}));

export default function PyqShop() {
  const [search, setSearch] = useState('');
  const [branch, setBranch] = useState('');
  const [semester, setSemester] = useState('');
  const [year, setYear] = useState('');
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredPapers = useMemo(() => {
    return papers.filter((paper) => (
      paper.subject.toLowerCase().includes(search.toLowerCase()) &&
      (!branch || paper.branch === branch) &&
      (!semester || paper.semester === semester) &&
      (!year || paper.year.match(/\b(\d{4})\b/)?.[1] === year)
    ));
  }, [search, branch, semester, year]);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isSidebarOpen);

    return () => document.body.classList.remove('overflow-hidden');
  }, [isSidebarOpen]);

  const closeSidebarOnMobile = () => {
    if (window.matchMedia('(max-width: 767px)').matches) {
      setIsSidebarOpen(false);
    }
  };

  const updateFilter = (setter) => (value) => {
    setter(value);
    closeSidebarOnMobile();
  };

  const clearFilters = () => {
    setSearch('');
    setBranch('');
    setSemester('');
    setYear('');
    closeSidebarOnMobile();
  };

  const filterOptions = [
    { id: 'branch-filter', label: 'Branch', value: branch, setter: setBranch, options: ['CST', 'EE', 'ECE', 'ME', 'CE', 'HM', 'Common'], allLabel: 'All Branches' },
    { id: 'semester-filter', label: 'Semester', value: semester, setter: setSemester, options: ['1st Semester', '2nd Semester', '3rd Semester', '4th Semester', '5th Semester', '6th Semester'], allLabel: 'All Semesters' },
    { id: 'year-filter', label: 'Year', value: year, setter: setYear, options: ['2025', '2024', '2023', '2022'], allLabel: 'All Years' },
  ];

  return (
    <main className="mx-auto max-w-[1400px] px-4 py-6 md:px-6 lg:py-8">
      
      {/* Mobile Filter Toggle Button */}
      <div className="mb-4 flex items-center justify-between md:hidden">
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="flex h-9 items-center gap-2 rounded-md border border-slate-300 bg-white px-4 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
          </svg>
          Filters
        </button>
      </div>

      {/* Mobile Backdrop Overlay */}
      {isSidebarOpen && (
        <button
          type="button"
          aria-label="Close filters"
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Filters Section (Sidebar on Mobile, Inline on Desktop) */}
      <section className={`
        fixed inset-y-0 left-0 z-50 flex w-[280px] flex-col gap-5 bg-white p-5 shadow-2xl transition-transform duration-300 ease-in-out 
        md:static md:mb-6 md:w-auto md:translate-x-0 md:flex-row md:items-end md:bg-transparent md:p-0 md:shadow-none lg:gap-4
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        
        {/* Mobile Sidebar Header */}
        <div className="flex items-center justify-between md:hidden">
          <h2 className="text-lg font-semibold text-slate-800">Filters</h2>
          <button 
            type="button"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close filters"
            className="rounded-md p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Search Bar */}
        <div className="w-full md:flex-1">
          <label className="block w-full">
            <span className="mb-1.5 block text-xs font-medium text-slate-700">Search Subject</span>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </span>
              <input 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                placeholder="E.g., Mathematics..." 
                className="h-9 w-full rounded-md border border-slate-300 bg-white pl-9 pr-3 text-sm shadow-sm outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
              />
            </div>
          </label>
        </div>

        {/* Filters and Clear Button Container */}
        <div className="flex w-full flex-col gap-4 md:w-auto md:flex-row md:items-end lg:gap-4">
          
          {/* Dropdowns */}
          {filterOptions.map(({ id, label, value, setter, options, allLabel }) => (
            <Dropdown
              key={id}
              id={id}
              label={label}
              value={value}
              onChange={(event) => updateFilter(setter)(event.target.value)}
              options={options}
              defaultOptionLabel={allLabel}
              className="md:w-[130px] lg:w-[150px]"
            />
          ))}

          {/* Clear Button */}
          <div className="mt-2 flex h-full flex-col justify-end w-full md:mt-0 md:w-[90px] lg:w-[100px]">
            <button 
              onClick={clearFilters} 
              className="flex h-9 w-full items-center justify-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50 focus:outline-none focus:ring-1 focus:ring-slate-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              Clear
            </button>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <p className="mb-4 flex items-center gap-1.5 text-xs text-slate-600 sm:text-sm">
        <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-600">
          i
        </span> 
        Showing <strong className="font-semibold text-slate-900">{filteredPapers.length}</strong> papers
      </p>

      {/* Cards Grid */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6">
        {filteredPapers.map((paper) => (
          <PyqCard key={paper.id} {...paper} />
        ))}
        {filteredPapers.length === 0 && (
          <div className="col-span-full py-12 text-center text-sm text-slate-500 bg-slate-50 rounded-lg border border-dashed border-slate-300">
            No papers found matching your filters. Try adjusting them.
          </div>
        )}
      </section>
      
    </main>
  );
}