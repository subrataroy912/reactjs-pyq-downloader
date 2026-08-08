import { Route, Routes } from 'react-router'

import Home from '../pages/Home'
import LatestPapers from '../pages/LatestPapers'
import Branches from '../pages/Branches'
import BranchDetail from '../pages/BranchDetail'
import Semester from '../pages/Semester'
import SubjectDetail from '../pages/SubjectDetail'
import PaperDetail from '../pages/PaperDetail'
import Search from '../pages/Search'
import About from '../pages/About'
import Contact from '../pages/Contact'
import FAQ from '../pages/FAQ'
import NotFound from '../pages/NotFound'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/latest-papers" element={<LatestPapers />} />
      <Route path="/branches" element={<Branches />} />
      <Route path="/branches/:branchSlug" element={<BranchDetail />} />
      <Route path="/branches/:branchSlug/:semesterSlug" element={<Semester />} />
      <Route path="/branches/:branchSlug/:semesterSlug/:subjectSlug" element={<SubjectDetail />} />
      <Route path="/branches/:branchSlug/:semesterSlug/:subjectSlug/:year" element={<PaperDetail />} />
      <Route path="/search" element={<Search />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
