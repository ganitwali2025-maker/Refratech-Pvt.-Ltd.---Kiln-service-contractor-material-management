const COLORS = { Completed: 'ok', Active: 'ok', 'In progress': 'warn', Inactive: 'bad' }

export default function Tag({ value }) {
  return <span className={`tag ${COLORS[value] || ''}`}>{value}</span>
}
