function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="brand-block">
            <div className="brand-icon">📖</div>
            <div className="brand-text">
              <span className="brand-title">WB Diploma PYQ</span>
              <span className="brand-subtitle">Previous Year Question Papers</span>
            </div>
          </div>
          <p>
            Your trusted resource for West Bengal Diploma Polytechnic previous year question papers.
          </p>
          <span className="copyright">© 2024 WB Diploma PYQ. All rights reserved.</span>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/branches">Branches</a></li>
            <li><a href="/semesters">Semesters</a></li>
            <li><a href="/latest-papers">Latest Papers</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Support Links</h3>
          <ul>
            <li><a href="/faq">How to Download</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-use">Terms of Use</a></li>
            <li><a href="/contact">Disclaimer</a></li>
          </ul>
        </div>

        <div className="footer-help">
          <h3>Need Help?</h3>
          <p>Can't find what you're looking for? Report the missing paper and we'll add it.</p>
          <a href="/report-missing-paper" className="report-btn">📎 Report Now</a>
        </div>
      </div>

      <div className="footer-base">
        <span>© 2024 WB Diploma PYQ. All rights reserved.</span>
        <div className="social-links">
          <a href="/" aria-label="Facebook">f</a>
          <a href="/" aria-label="Instagram">◎</a>
          <a href="/" aria-label="YouTube">◉</a>
          <a href="/" aria-label="X">x</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
