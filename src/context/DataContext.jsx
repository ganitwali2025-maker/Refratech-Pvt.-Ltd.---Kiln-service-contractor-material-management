import { createContext, useContext, useEffect, useState } from 'react'
import { SEED } from '../data/seed.js'

const Ctx = createContext(null)
const KEY = 'refratech2'

function load() {
  try {
    const v = JSON.parse(localStorage.getItem(KEY))
    if (v) return v
  } catch { /* storage empty or blocked */ }
  return structuredClone(SEED)
}

export function DataProvider({ children }) {
  const [data, setData] = useState(load)

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(data)) } catch { /* ignore */ }
  }, [data])

  const add = (s, row) => setData((d) => ({ ...d, [s]: [...d[s], { id: Date.now(), ...row }] }))
  const remove = (s, id) => setData((d) => ({ ...d, [s]: d[s].filter((r) => r.id !== id) }))
  const setMeta = (k, v) => setData((d) => ({ ...d, meta: { ...d.meta, [k]: v } }))

  return <Ctx.Provider value={{ data, add, remove, setMeta }}>{children}</Ctx.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useData = () => useContext(Ctx)
