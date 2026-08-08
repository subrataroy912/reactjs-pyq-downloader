const popularBranches = [
  { name: 'Computer Science & Technology', papers: '324 Papers', tone: 'purple' },
  { name: 'Electrical Engineering', papers: '287 Papers', tone: 'pink' },
  { name: 'Mechanical Engineering', papers: '312 Papers', tone: 'blue' },
  { name: 'Civil Engineering', papers: '196 Papers', tone: 'green' },
  { name: 'Electronics & Telecommunication', papers: '256 Papers', tone: 'amber' },
  { name: 'Information Technology', papers: '221 Papers', tone: 'teal' },
  { name: 'Automobile Engineering', papers: '146 Papers', tone: 'orange' },
  { name: 'Electrical & Electronics Engineering', papers: '134 Papers', tone: 'rose' },
]

const semesterData = [
  { sem: '01', label: 'Semester 1', count: '542 Papers' },
  { sem: '02', label: 'Semester 2', count: '623 Papers' },
  { sem: '03', label: 'Semester 3', count: '658 Papers' },
  { sem: '04', label: 'Semester 4', count: '612 Papers' },
  { sem: '05', label: 'Semester 5', count: '598 Papers' },
  { sem: '06', label: 'Semester 6', count: '564 Papers' },
]

const recentPapers = [
  { title: 'Computer Programming Using C', subject: 'Computer Programming', semester: '03', branch: 'Computer Science & Technology', year: '2023', size: '1.2 MB' },
  { title: 'Electrical Circuits & Network', subject: 'Electrical Circuits', semester: '03', branch: 'Electrical Engineering', year: '2023', size: '1.1 MB' },
  { title: 'Engineering Mathematics - III', subject: 'Engineering Mathematics', semester: '03', branch: 'Common for All Branches', year: '2023', size: '1.3 MB' },
  { title: 'Digital Electronics', subject: 'Digital Electronics', semester: '03', branch: 'Electronics & Telecommunication', year: '2023', size: '1.0 MB' },
  { title: 'Strength of Materials', subject: 'Strength of Materials', semester: '03', branch: 'Mechanical Engineering', year: '2023', size: '1.2 MB' },
]

const stats = [
  { value: '5000+', label: 'Question Papers', icon: '📄' },
  { value: '20+', label: 'Diploma Branches', icon: '📚' },
  { value: '12', label: 'Years Question Bank', icon: '🏆' },
  { value: '50K+', label: 'Downloads', icon: '📥' },
]

const chips = ['Computer Science', 'Semester 3', 'Engineering Mathematics', 'Physics', 'Digital Electronics']

function HomePage() {
  return (
    <main className="home-page">
      <section className="hero-panel">
        <div className="hero-copy">
          <h1>
            West Bengal Diploma Polytechnic
            <span>Previous Year Question Papers</span>
          </h1>

          <p>
            Download semester-wise and subject-wise previous year question papers for all diploma branches under WBST&VE&SD.
          </p>

          <div className="search-bar">
            <input type="text" placeholder="Search Subject, Subject Code or Paper..." aria-label="Search papers" />
            <button type="button">Search Papers <span>⌕</span></button>
          </div>

          <div className="chip-row">
            {chips.map((chip, index) => (
              <span key={chip} className={index === 0 ? 'chip active' : 'chip'}>
                {index === 0 && '◉'}
                {index === 1 && '◍'}
                {index === 2 && '◍'}
                {index === 3 && '◍'}
                {index === 4 && '◍'}
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="paper paper-one" />
          <div className="paper paper-two" />
          <div className="paper paper-three" />
          <div className="book-stack">
            <span className="book blue" />
            <span className="book orange" />
            <span className="book red" />
          </div>

          <div className="character">
            <div className="character-head" />
            <div className="character-body" />
            <div className="character-arm arm-left" />
            <div className="character-arm arm-right" />
            <div className="character-laptop" />
            <div className="character-legs" />
          </div>

          <div className="pdf-card">
            <span>PDF</span>
          </div>
          <div className="plant">
            <span className="leaf leaf-1" />
            <span className="leaf leaf-2" />
            <span className="leaf leaf-3" />
          </div>
        </div>
      </section>

      <section className="section-block branch-section">
        <div className="section-header">
          <h2>
            <span className="section-icon">📘</span> Popular Diploma Branches
          </h2>
          <a href="/branches">View All Branches <span>→</span></a>
        </div>

        <div className="branch-grid">
          {popularBranches.map((branch) => (
            <article key={branch.name} className="branch-card">
              <div className={`branch-icon ${branch.tone}`}>📘</div>
              <div className="branch-copy">
                <h3>{branch.name}</h3>
                <p>{branch.papers}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block semester-section">
        <div className="section-header">
          <h2>
            <span className="section-icon">📚</span> Browse Semester Wise
          </h2>
          <a href="/semesters">View All Semesters <span>→</span></a>
        </div>

        <div className="semester-grid">
          {semesterData.map((item) => (
            <div key={item.sem} className="semester-card">
              <div className="semester-number">{item.sem}</div>
              <div className="semester-label">{item.label}</div>
              <div className="semester-count">{item.count}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-header">
          <h2>
            <span className="section-icon">🗂️</span> Recently Uploaded Papers
          </h2>
        </div>

        <div className="papers-table-wrap">
          <table className="papers-table">
            <thead>
              <tr>
                <th>Paper Title</th>
                <th>Subject</th>
                <th>Semester</th>
                <th>Branch</th>
                <th>Year</th>
                <th>Size</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {recentPapers.map((paper, index) => (
                <tr key={`${paper.title}-${index}`}>
                  <td>{paper.title}</td>
                  <td>{paper.subject}</td>
                  <td>{paper.semester}</td>
                  <td>{paper.branch}</td>
                  <td>{paper.year}</td>
                  <td>{paper.size}</td>
                  <td className="action-cell">
                    <button type="button" className="preview-btn">Preview</button>
                    <button type="button" className="download-btn">Download</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="stats-row">
        {stats.map((item) => (
          <div key={item.label} className="stat-card">
            <span className="stat-icon">{item.icon}</span>
            <div className="stat-value">{item.value}</div>
            <div className="stat-label">{item.label}</div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default HomePage
