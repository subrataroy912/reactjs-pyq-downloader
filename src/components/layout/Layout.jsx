import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-950">
      <Navbar />
      <div className="min-h-[calc(100vh-220px)]">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
