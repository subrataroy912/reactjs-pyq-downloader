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
    <main className="px-5 py-8 md:px-7">
      <section className="mb-7 grid grid-cols-1 items-end gap-6 xl:grid-cols-[1.55fr_0.56fr_0.56fr_0.46fr_0.52fr]">
        <label className="relative block">
          <span className="absolute left-7 top-1/2 -translate-y-1/2 text-4xl text-slate-700">⌕</span>
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search subject name..." className="h-24 w-full rounded-xl border border-slate-200 bg-white pl-24 pr-6 text-3xl shadow-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100" />
        </label>
        {[['Branch', branch, setBranch, ['CST', 'EE', 'ECE', 'ME', 'CE', 'HM', 'Common'], 'All Branches'], ['Semester', semester, setSemester, ['1st Semester', '2nd Semester', '3rd Semester', '4th Semester', '5th Semester', '6th Semester'], 'All Semesters'], ['Year', year, setYear, ['2025', '2024', '2023', '2022'], 'All Years']].map(([label, value, setter, options, all]) => (
          <label key={label} className="block">
            <span className="mb-2 block text-2xl font-semibold text-slate-900">{label}</span>
            <select value={value} onChange={(e) => setter(e.target.value)} className="h-20 w-full rounded-xl border border-slate-200 bg-white px-6 text-2xl shadow-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100">
              <option value="">{all}</option>
              {options.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </label>
        ))}
        <button onClick={clearFilters} className="h-20 rounded-xl border border-slate-200 bg-white px-6 text-2xl font-bold text-slate-950 shadow-sm hover:bg-slate-50">↻ Clear Filters</button>
      </section>

      <p className="mb-7 flex items-center gap-4 text-2xl text-slate-800"><span className="text-blue-600">ⓘ</span> Showing {filteredPapers.length} papers</p>

      <section className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4">
        {filteredPapers.map((paper) => <PyqCard key={paper.id} {...paper} />)}
      </section>
    </main>
  )
}
