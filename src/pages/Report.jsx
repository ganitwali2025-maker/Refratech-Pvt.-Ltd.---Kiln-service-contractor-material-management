import { useData } from '../context/DataContext.jsx'
import { pend, bal } from '../utils/calc.js'

const FIELDS = [
  ['plant', 'Plant / client'],
  ['contractor', 'Contractor'],
  ['incharge', 'Site incharge'],
]

export default function Report() {
  const { data, setMeta } = useData()
  const { meta, materials } = data

  return (
    <>
      <h1>Report</h1>
      <p className="sub">Material stock summary. Check the details, then download the PDF.</p>

      <div className="panel">
        <h2>Report details</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          {FIELDS.map(([k, l]) => (
            <label key={k}>{l}<input value={meta[k]} onChange={(e) => setMeta(k, e.target.value)} /></label>
          ))}
          <button className="btn" type="button" onClick={async () => { const { downloadStockPdf } = await import('../utils/pdf.js'); downloadStockPdf(meta, materials) }}>Download PDF</button>
        </form>
      </div>

      <div className="panel">
        <h2>{meta.plant}</h2>
        <p className="sub" style={{ margin: '0 0 12px' }}>
          Contractor: {meta.contractor}<br />Site incharge: {meta.incharge}
        </p>
        <div className="wrap">
          <table>
            <thead>
              <tr><th>Product name</th><th>Order qty</th><th>Dispatch qty</th><th>Pending qty</th><th>Total used at site</th><th>Balance stock</th></tr>
            </thead>
            <tbody>
              {materials.map((r) => (
                <tr key={r.id}>
                  <td>{r.name}</td><td>{r.order}</td><td>{r.dispatch}</td><td>{pend(r)}</td>
                  <td>{r.used}{r.note ? ` (${r.note})` : ''}</td><td><b>{bal(r)}</b></td>
                </tr>
              ))}
            </tbody>
          </table>
          {materials.length === 0 && <div className="empty">No materials yet. Add them from Materials.</div>}
        </div>
      </div>
    </>
  )
}
