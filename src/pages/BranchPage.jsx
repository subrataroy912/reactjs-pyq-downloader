import { useParams } from 'react-router'

const branchMeta = {
  'computer-science-technology': {
    name: 'Computer Science & Technology',
    count: '324 papers',
    focus: 'Programming, data structures, DBMS, networking',
  },
  'electrical-engineering': {
    name: 'Electrical Engineering',
    count: '287 papers',
    focus: 'Machines, circuits, power systems, measurement',
  },
  'mechanical-engineering': {
    name: 'Mechanical Engineering',
    count: '312 papers',
    focus: 'Thermodynamics, design, manufacturing, strength of materials',
  },
  'civil-engineering': {
    name: 'Civil Engineering',
    count: '196 papers',
    focus: 'Structures, surveying, concrete technology, hydraulics',
  },
}

function BranchPage() {
  const { branchSlug } = useParams()
  const info = branchMeta[branchSlug] || {
    name: 'Branch Overview',
    count: 'Academic resources',
    focus: 'Subject-wise question papers and notes',
  }

  const semesters = [
    { label: 'Semester 1', papers: '87' },
    { label: 'Semester 2', papers: '96' },
    { label: 'Semester 3', papers: '102' },
    { label: 'Semester 4', papers: '88' },
    { label: 'Semester 5', papers: '91' },
    { label: 'Semester 6', papers: '77' },
  ]

  return (
    <main className="page-shell">
      <section className="page-card">
        <div className="page-header">
          <div>
            <p className="section-kicker">Branch</p>
            <h1>{info.name}</h1>
          </div>
          <span className="pill-badge">{info.count}</span>
        </div>

        <p className="page-lead">{info.focus}</p>

        <div className="branch-overview-grid">
          {semesters.map((item) => (
            <div key={item.label} className="mini-card">
              <strong>{item.label}</strong>
              <span>{item.papers} papers</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default BranchPage
