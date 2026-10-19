import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import TopBar from './components/TopBar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Kilns from './pages/Kilns.jsx'
import Contractors from './pages/Contractors.jsx'
import Materials from './pages/Materials.jsx'
import Report from './pages/Report.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  const [open, setOpen] = useState(false)
  const [isLoggedOut, setIsLoggedOut] = useState(false)

  return (
    <div className="app">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <main>
        <TopBar
          onOpenMenu={() => setOpen((o) => !o)}
          isLoggedOut={isLoggedOut}
          onToggleLogout={setIsLoggedOut}
        />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/kilns" element={<Kilns />} />
            <Route path="/contractors" element={<Contractors />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/report" element={<Report />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

