import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <h1>Page not found</h1>
      <p className="sub">This page does not exist. <Link to="/">Go to the dashboard</Link>.</p>
    </>
  )
}
