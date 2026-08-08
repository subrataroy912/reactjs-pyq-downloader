import { Route, Routes } from 'react-router'
import HomePage from '../pages/HomePage'
import LatestPapersPage from '../pages/LatestPapersPage'
import BranchPage from '../pages/BranchPage'
import SemesterPage from '../pages/SemesterPage'
import SubjectPage from '../pages/SubjectPage'
import SearchPage from '../pages/SearchPage'
import InfoPage from '../pages/InfoPage'
import YearPage from '../pages/YearPage'
import NotFoundPage from '../pages/NotFoundPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/latest-papers" element={<LatestPapersPage />} />
      <Route path="/branches" element={<InfoPage title="Branches" />} />
      <Route path="/branches/:branchSlug" element={<BranchPage />} />
      <Route path="/branches/:branchSlug/:semesterSlug" element={<SemesterPage />} />
      <Route path="/branches/:branchSlug/:semesterSlug/:subjectSlug" element={<SubjectPage />} />
      <Route
        path="/branches/:branchSlug/:semesterSlug/:subjectSlug/syllabus"
        element={<InfoPage title="Syllabus" />}
      />
      <Route
        path="/branches/:branchSlug/:semesterSlug/:subjectSlug/important-questions"
        element={<InfoPage title="Important Questions" />}
      />
      <Route
        path="/branches/:branchSlug/:semesterSlug/:subjectSlug/notes"
        element={<InfoPage title="Notes" />}
      />
      <Route
        path="/branches/:branchSlug/:semesterSlug/:subjectSlug/model-papers"
        element={<InfoPage title="Model Papers" />}
      />
      <Route
        path="/branches/:branchSlug/:semesterSlug/:subjectSlug/pyq-analysis"
        element={<InfoPage title="PYQ Analysis" />}
      />
      <Route
        path="/branches/:branchSlug/:semesterSlug/:subjectSlug/discussion"
        element={<InfoPage title="Discussion" />}
      />
      <Route path="/branches/:branchSlug/:semesterSlug/:subjectSlug/:year" element={<YearPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/semesters" element={<InfoPage title="Semesters" />} />
      <Route path="/semesters/:semesterSlug" element={<SemesterPage />} />
      <Route path="/about" element={<InfoPage title="About" description="About this project." />} />
      <Route path="/contact" element={<InfoPage title="Contact" description="Get in touch." />} />
      <Route path="/faq" element={<InfoPage title="FAQ" description="Common questions and answers." />} />
      <Route
        path="/privacy-policy"
        element={<InfoPage title="Privacy Policy" description="Your privacy matters." />}
      />
      <Route
        path="/terms-of-use"
        element={<InfoPage title="Terms of Use" description="Terms and conditions." />}
      />
      <Route
        path="/report-missing-paper"
        element={<InfoPage title="Report Missing Paper" description="Help us add missing resources." />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes
