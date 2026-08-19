import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import InfoPage from '../pages/InfoPage'
import NotFoundPage from '../pages/NotFoundPage'
import PyqShop from '../pages/PyqShop'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/wb" element={<PyqShop />} />

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
