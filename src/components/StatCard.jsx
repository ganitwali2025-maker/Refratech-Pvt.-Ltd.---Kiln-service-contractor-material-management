import Icon from './Icon.jsx'

export default function StatCard({ tone, icon, label, value }) {
  return (
    <div className={`stat ${tone}`}>
      <i className="ico"><Icon name={icon} /></i>
      <div>
        <span>{label}</span>
        <b>{value}</b>
      </div>
    </div>
  )
}
