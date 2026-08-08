const searchResults = [
  { title: 'Engineering Mathematics - III', branch: 'Computer Science & Technology', semester: 'Semester 3', year: '2023', type: 'Question Paper' },
  { title: 'Basic Electrical Engineering', branch: 'Electrical Engineering', semester: 'Semester 2', year: '2022', type: 'Question Paper' },
  { title: 'Computer Programming', branch: 'IT', semester: 'Semester 3', year: '2021', type: 'Model Paper' },
  { title: 'Applied Mechanics', branch: 'Mechanical Engineering', semester: 'Semester 1', year: '2024', type: 'Question Paper' },
]

function SearchPage() {
  return (
    <main className="page-shell">
      <section className="page-card">
        <div className="page-header">
          <div>
            <p className="section-kicker">Search</p>
            <h1>Find papers quickly</h1>
          </div>
        </div>

        <div className="search-panel">
          <input type="text" value="Engineering Math" readOnly aria-label="Search query" />
          <button type="button">Search</button>
        </div>

        <div className="chip-row compact">
          <span className="chip active">All</span>
          <span className="chip">Semester 3</span>
          <span className="chip">Computer Science</span>
          <span className="chip">2023</span>
        </div>

        <div className="result-list">
          {searchResults.map((result) => (
            <article key={result.title} className="result-item">
              <div className="result-meta">
                <span className="type-pill">{result.type}</span>
                <span>{result.branch}</span>
              </div>

              <h3>{result.title}</h3>

              <div className="result-footer">
                <span>{result.semester}</span>
                <span>{result.year}</span>
                <button type="button">View PDF</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default SearchPage
