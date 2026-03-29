import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <h1>Weather App</h1>
      <nav>
        <li>
          <Link to="/">Current</Link>
        </li>
        <li>
          <Link to="/hourly">Hourly</Link>
        </li>
        <li>
          <Link to="/5-day">5 Day</Link>
        </li>
      </nav>
    </header>
  )
}