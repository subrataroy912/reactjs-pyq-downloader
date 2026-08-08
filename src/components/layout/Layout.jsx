import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />
      <div className="min-h-[calc(100vh-120px)]">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
