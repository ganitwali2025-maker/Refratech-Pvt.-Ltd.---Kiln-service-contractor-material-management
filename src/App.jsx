import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Kilns from './pages/Kilns.jsx'
import Contractors from './pages/Contractors.jsx'
import Materials from './pages/Materials.jsx'
import Report from './pages/Report.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className="app">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <main>
        <div className="top">
          <button onClick={() => setOpen((o) => !o)} aria-label="Open menu">Menu</button>
          <b>Refratech</b>
        </div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/kilns" element={<Kilns />} />
          <Route path="/contractors" element={<Contractors />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/report" element={<Report />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}
