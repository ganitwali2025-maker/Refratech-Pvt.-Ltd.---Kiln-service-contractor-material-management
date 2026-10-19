import { NavLink } from 'react-router-dom'
import Icon from './Icon.jsx'

const ITEMS = [
  { to: '/', label: 'Dashboard', icon: 'dash' },
  { to: '/kilns', label: 'Kiln Service', icon: 'kilns' },
  { to: '/contractors', label: 'Contractors', icon: 'contractors' },
  { to: '/materials', label: 'Materials', icon: 'materials' },
  { to: '/report', label: 'Report', icon: 'report' },
]

function toggleTheme() {
  const r = document.documentElement
  const dark = getComputedStyle(r).colorScheme === 'dark'
  r.dataset.theme = dark ? 'light' : 'dark'
}

export default function Sidebar({ open, onClose }) {
  return (
    <aside className={open ? 'open' : ''}>
      <div className="brand">
        <b>Refratech Pvt. Ltd.</b>
        <span>Raipur</span>
      </div>
      <nav>
        {ITEMS.map((i) => (
          <NavLink key={i.to} to={i.to} end={i.to === '/'} onClick={onClose}>
            <Icon name={i.icon} />
            {i.label}
          </NavLink>
        ))}
      </nav>
      <div className="foot">
        Kiln service, contractor &amp; material management
        <br />
        <button onClick={toggleTheme}>Switch theme</button>
      </div>
    </aside>
  )
}
