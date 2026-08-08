function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="text-lg font-bold text-slate-900">PyQ Downloader</div>
        <div className="flex gap-4 text-sm text-slate-700">
          <a href="/" className="hover:text-slate-900">Home</a>
          <a href="/latest-papers" className="hover:text-slate-900">Latest</a>
          <a href="/branches" className="hover:text-slate-900">Branches</a>
          <a href="/search" className="hover:text-slate-900">Search</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
