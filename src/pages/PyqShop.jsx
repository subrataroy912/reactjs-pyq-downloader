import { useMemo, useState } from 'react'
import PyqCard from '../components/common/PyqCard'

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
  downloadLink: '/path-to-your-pdf.pdf',
}))

export default function PyqShop() {
  const [search, setSearch] = useState('')
  const [branch, setBranch] = useState('')
  const [semester, setSemester] = useState('')
  const [year, setYear] = useState('')

  const filteredPapers = useMemo(() => papers.filter((paper) => (
    paper.subject.toLowerCase().includes(search.toLowerCase()) &&
    (!branch || paper.branch === branch) &&
    (!semester || paper.semester === semester) &&
    (!year || paper.year.includes(year))
  )), [search, branch, semester, year])

  const clearFilters = () => {
    setSearch('')
    setBranch('')
    setSemester('')
    setYear('')
  }

  return (
    <main className="mx-auto w-full max-w-screen-2xl px-3 py-5 sm:px-5 sm:py-7 md:px-7 md:py-8">
      <section className="mb-5 grid grid-cols-1 items-end gap-4 sm:mb-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[minmax(320px,1.55fr)_minmax(180px,0.56fr)_minmax(180px,0.56fr)_minmax(150px,0.46fr)_minmax(180px,0.52fr)] xl:gap-6">
        <label className="relative block sm:col-span-2 lg:col-span-4 xl:col-span-1">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-slate-700 sm:left-5 sm:text-3xl lg:left-7 lg:text-4xl">⌕</span>
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search subject name..." className="h-14 w-full rounded-xl border border-slate-200 bg-white pl-14 pr-4 text-base shadow-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 sm:h-16 sm:pl-16 sm:text-xl lg:h-20 lg:pl-20 lg:text-2xl xl:h-24 xl:pl-24 xl:text-3xl" />
        </label>
        {[['Branch', branch, setBranch, ['CST', 'EE', 'ECE', 'ME', 'CE', 'HM', 'Common'], 'All Branches'], ['Semester', semester, setSemester, ['1st Semester', '2nd Semester', '3rd Semester', '4th Semester', '5th Semester', '6th Semester'], 'All Semesters'], ['Year', year, setYear, ['2025', '2024', '2023', '2022'], 'All Years']].map(([label, value, setter, options, all]) => (
          <label key={label} className="block">
            <span className="mb-1.5 block text-base font-semibold text-slate-900 sm:text-lg lg:mb-2 lg:text-xl xl:text-2xl">{label}</span>
            <select value={value} onChange={(e) => setter(e.target.value)} className="h-12 w-full rounded-xl border border-slate-200 bg-white px-3 text-base shadow-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 sm:h-14 sm:text-lg lg:h-16 lg:px-5 lg:text-xl xl:h-20 xl:px-6 xl:text-2xl">
              <option value="">{all}</option>
              {options.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </label>
        ))}
        <button onClick={clearFilters} className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-base font-bold text-slate-950 shadow-sm hover:bg-slate-50 sm:h-14 sm:text-lg lg:h-16 lg:text-xl xl:h-20 xl:px-6 xl:text-2xl">↻ Clear Filters</button>
      </section>

      <p className="mb-5 flex items-center gap-2 text-base text-slate-800 sm:mb-6 sm:text-lg lg:mb-7 lg:gap-4 lg:text-2xl"><span className="text-blue-600">ⓘ</span> Showing {filteredPapers.length} papers</p>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4 xl:gap-7">
        {filteredPapers.map((paper) => <PyqCard key={paper.id} {...paper} />)}
      </section>
    </main>
  )
}
