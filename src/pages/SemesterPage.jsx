import { useParams } from 'react-router'

const subjectMap = {
  'semester-1': ['English', 'Mathematics', 'Physics', 'Engineering Drawing', 'Workshop'],
  'semester-2': ['Chemistry', 'Applied Mathematics', 'Electrical Basics', 'Workshop Practice', 'CAD'],
  'semester-3': ['Data Structures', 'Digital Systems', 'Thermodynamics', 'Mechanics', 'Materials'],
  'semester-4': ['Operating Systems', 'Communication Systems', 'Fluid Mechanics', 'Surveying', 'Structures'],
  'semester-5': ['Embedded Systems', 'Power Systems', 'Machine Design', 'Hydraulics', 'Instrumentation'],
  'semester-6': ['Project Work', 'Industrial Training', 'Programming Lab', 'System Design', 'Seminar'],
}

function SemesterPage() {
  const { semesterSlug } = useParams()
  const name = semesterSlug ? semesterSlug.replace(/-/g, ' ') : 'Semester'
  const subjects = subjectMap[semesterSlug] || ['Core subjects', 'Lab work', 'Theory papers']

  return (
    <main className="page-shell">
      <section className="page-card">
        <div className="page-header">
          <div>
            <p className="section-kicker">Semester</p>
            <h1>{name}</h1>
          </div>
          <span className="pill-badge">{subjects.length} subjects</span>
        </div>

        <div className="info-grid">
          {subjects.map((subject) => (
            <div key={subject} className="mini-card">
              <div className="mini-card-icon">📘</div>
              <p>{subject}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default SemesterPage
