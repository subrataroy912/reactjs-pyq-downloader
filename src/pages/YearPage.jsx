import { useParams } from 'react-router'

function YearPage() {
  const { branchSlug, semesterSlug, subjectSlug, year } = useParams()

  return (
    <main className="page-shell">
      <section className="page-card">
        <div className="page-header">
          <div>
            <p className="section-kicker">Year Papers</p>
            <h1>{year}</h1>
          </div>
          <span className="pill-badge">{branchSlug}</span>
        </div>

        <p className="page-lead">Selected exam papers from {year} for {subjectSlug} in {semesterSlug}.</p>

        <div className="info-grid">
          <div className="mini-card">
            <div className="mini-card-icon">📄</div>
            <p>Question paper - Set A</p>
          </div>
          <div className="mini-card">
            <div className="mini-card-icon">📄</div>
            <p>Question paper - Set B</p>
          </div>
          <div className="mini-card">
            <div className="mini-card-icon">📄</div>
            <p>Answer key</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default YearPage
