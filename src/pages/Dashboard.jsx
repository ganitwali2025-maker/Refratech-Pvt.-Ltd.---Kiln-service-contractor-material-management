import { useData } from '../context/DataContext.jsx'
import StatCard from '../components/StatCard.jsx'
import Tag from '../components/Tag.jsx'
import { pend } from '../utils/calc.js'

export default function Dashboard() {
  const { data } = useData()
  const open = data.kilns.filter((k) => k.status !== 'Completed').length
  const active = data.contractors.filter((c) => c.status === 'Active').length
  const pending = data.materials.filter((m) => pend(m) > 0).length
  const latest = [...data.kilns].sort((a, b) => (b.date || '').localeCompare(a.date || '')).slice(0, 5)

  return (
    <>
      <h1>Dashboard</h1>
      <p className="sub">Kiln service, contractor &amp; material management at a glance.</p>
      <div className="stats">
        <StatCard tone="s1" icon="kilns" label="Open kiln jobs" value={open} />
        <StatCard tone="s2" icon="contractors" label="Active contractors" value={active} />
        <StatCard tone="s3" icon="materials" label="Materials tracked" value={data.materials.length} />
        <StatCard tone="s4" icon="warn" label="Pending deliveries" value={pending} />
      </div>
      <div className="panel">
        <h2>Latest kiln services</h2>
        <div className="wrap">
          <table>
            <thead>
              <tr><th>Kiln</th><th>Site</th><th>Service</th><th>Date</th><th>Status</th></tr>
            </thead>
            <tbody>
              {latest.map((k) => (
                <tr key={k.id}>
                  <td>{k.name}</td><td>{k.site}</td><td>{k.work}</td><td>{k.date}</td><td><Tag value={k.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
          {latest.length === 0 && <div className="empty">No kiln jobs yet. Add one from Kiln Service.</div>}
        </div>
      </div>
    </>
  )
}
