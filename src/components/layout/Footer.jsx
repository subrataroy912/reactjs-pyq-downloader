function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 text-sm text-slate-600">
        <span>© 2026 PyQ Downloader</span>
        <div className="flex gap-4">
          <a href="/about" className="hover:text-slate-900">About</a>
          <a href="/contact" className="hover:text-slate-900">Contact</a>
          <a href="/faq" className="hover:text-slate-900">FAQ</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
