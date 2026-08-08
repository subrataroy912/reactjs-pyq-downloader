function NotFoundPage() {
  return (
    <main className="page-shell">
      <section className="page-card not-found-card">
        <p className="section-kicker">404</p>
        <h1>Page not found</h1>
        <p className="page-lead">The route you requested does not exist or has moved.</p>
        <a href="/" className="report-btn">Go back home</a>
      </section>
    </main>
  )
}

export default NotFoundPage
