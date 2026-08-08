const latestPapers = [
  { title: 'Engineering Mathematics - IV', branch: 'Computer Science & Technology', semester: 'Semester 4', date: '2024-07-12', size: '1.4 MB' },
  { title: 'Digital Electronics', branch: 'Electronics & Telecommunication', semester: 'Semester 3', date: '2024-07-10', size: '1.2 MB' },
  { title: 'Thermodynamics', branch: 'Mechanical Engineering', semester: 'Semester 5', date: '2024-07-08', size: '1.1 MB' },
  { title: 'Structural Analysis', branch: 'Civil Engineering', semester: 'Semester 5', date: '2024-07-05', size: '1.5 MB' },
]

function LatestPapersPage() {
  return (
    <main className="page-shell">
      <section className="page-card">
        <div className="page-header">
          <div>
            <p className="section-kicker">Latest Papers</p>
            <h1>Recently added question papers</h1>
          </div>
          <span className="pill-badge">4 New</span>
        </div>

        <div className="latest-list">
          {latestPapers.map((paper) => (
            <article key={paper.title} className="latest-item">
              <div className="latest-icon">📄</div>
              <div className="latest-copy">
                <h3>{paper.title}</h3>
                <p>{paper.branch}</p>
              </div>
              <div className="latest-meta">
                <span>{paper.semester}</span>
                <span>{paper.date}</span>
                <span>{paper.size}</span>
              </div>
              <button type="button">Download</button>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default LatestPapersPage
