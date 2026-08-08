import { useParams } from 'react-router'

function SubjectPage() {
  const { branchSlug, semesterSlug, subjectSlug } = useParams()
  const subjectName = subjectSlug ? subjectSlug.replace(/-/g, ' ') : 'Subject'

  const papers = [
    { year: '2024', title: `${subjectName} - Summer 2024`, type: 'Question Paper' },
    { year: '2023', title: `${subjectName} - Winter 2023`, type: 'Model Paper' },
    { year: '2022', title: `${subjectName} - Summer 2022`, type: 'Question Paper' },
  ]

  return (
    <main className="page-shell">
      <section className="page-card">
        <div className="page-header">
          <div>
            <p className="section-kicker">Subject</p>
            <h1>{subjectName}</h1>
          </div>
          <span className="pill-badge">{branchSlug} / {semesterSlug}</span>
        </div>

        <p className="page-lead">Core subject resources and previous year papers for revision and exam prep.</p>

        <div className="result-list">
          {papers.map((paper) => (
            <article key={`${paper.year}-${paper.title}`} className="result-item">
              <div className="result-meta">
                <span className="type-pill">{paper.type}</span>
                <span>{paper.year}</span>
              </div>
              <h3>{paper.title}</h3>
              <div className="result-footer">
                <span>{subjectName}</span>
                <button type="button">Download</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default SubjectPage
