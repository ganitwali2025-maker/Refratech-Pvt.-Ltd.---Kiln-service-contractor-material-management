import { useState } from 'react'
import { useData } from '../context/DataContext.jsx'
import { SECTIONS } from '../config/sections.jsx'
import Tag from './Tag.jsx'

function Field({ f, contractors }) {
  let input
  if (f.type === 'select') {
    input = <select name={f.key}>{f.options.map((o) => <option key={o}>{o}</option>)}</select>
  } else if (f.type === 'contractor') {
    input = (
      <select name={f.key}>
        <option value="">Not assigned</option>
        {contractors.map((c) => <option key={c.id}>{c.name}</option>)}
      </select>
    )
  } else {
    input = <input name={f.key} type={f.type || 'text'} min={f.type === 'number' ? 0 : undefined} required={!f.optional} />
  }
  return <label>{f.label}{input}</label>
}

export default function DataSection({ name }) {
  const cfg = SECTIONS[name]
  const { data, add, remove } = useData()
  const [q, setQ] = useState('')
  const rows = data[name].filter((r) => !q || JSON.stringify(r).toLowerCase().includes(q.toLowerCase()))

  const submit = (e) => {
    e.preventDefault()
    add(name, Object.fromEntries(new FormData(e.target)))
    e.target.reset()
  }
  const del = (id) => { if (window.confirm('Delete this record?')) remove(name, id) }

  return (
    <>
      <h1>{cfg.title}</h1>
      <p className="sub">{cfg.sub}</p>

      <div className="panel">
        <h2>Add new</h2>
        <form onSubmit={submit}>
          {cfg.fields.map((f) => <Field key={f.key} f={f} contractors={data.contractors} />)}
          <button className="btn">Save {cfg.singular}</button>
        </form>
      </div>

      <div className="panel">
        <div className="bar">
          <h2>All records ({rows.length})</h2>
          <input type="search" placeholder="Search" aria-label="Search" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <div className="wrap">
          <table>
            <thead>
              <tr>
                {cfg.fields.map((f) => <th key={f.key}>{f.label}</th>)}
                {cfg.extra?.map((x) => <th key={x.label}>{x.label}</th>)}
                <th />
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id}>
                  {cfg.fields.map((f) => (
                    <td key={f.key}>{f.key === 'status' ? <Tag value={r[f.key]} /> : r[f.key] || '–'}</td>
                  ))}
                  {cfg.extra?.map((x) => <td key={x.label}>{x.render(r)}</td>)}
                  <td><button className="btn ghost" onClick={() => del(r.id)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          {rows.length === 0 && <div className="empty">Nothing here yet. Fill the form above to add the first record.</div>}
        </div>
      </div>
    </>
  )
}
