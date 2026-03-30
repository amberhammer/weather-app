import { Link } from 'react-router-dom'

export default function Header( {weatherData} ) {
  return (
    <header>
      <div className="site-header">
        <h1>Weather App</h1>
        <input className="search-bar" type="text" placeholder="Search for a city..." />
      </div>
      <div className="nav-bar">
        <p>Current Location: {weatherData.timezone}</p>
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
      </div>
    </header>
  )
}