function Navbar() {
  return (
    <header className="top-navbar">
      <div className="nav-inner">
        <div className="brand-block">
          <div className="brand-icon">📖</div>
          <div className="brand-text">
            <span className="brand-title">WB Diploma PYQ</span>
            <span className="brand-subtitle">Previous Year Question Papers</span>
          </div>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="/" className="active">Home</a>
          <a href="/branches">Branches</a>
          <a href="/semesters">Semesters</a>
          <a href="/latest-papers">Latest Papers</a>
          <a href="/about">About</a>
        </nav>

        <div className="nav-actions">
          <button type="button" className="icon-button" aria-label="Search">⌕</button>
          <button type="button" className="icon-button" aria-label="Theme">◉</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
