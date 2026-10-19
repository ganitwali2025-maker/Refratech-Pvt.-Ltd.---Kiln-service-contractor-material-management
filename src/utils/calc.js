export const pend = (m) => Number(m.order) - Number(m.dispatch)
export const bal = (m) => Number(m.dispatch) - Number(m.used)
