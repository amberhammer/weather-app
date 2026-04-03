import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header( {weatherData} ) {
  return (
    <header>
      <div className={styles['site-header']}>
        <h1>Weather App</h1>
        <input className={styles['search-bar']} type="text" placeholder="Search for a city..." />
      </div>
      <div className={styles['nav-bar']}>
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
        <select className={styles['units-dropdown']} name="units" id="units">
          <option value="metric">°C</option>
          <option value="imperial">°F</option>
        </select>
      </div>
    </header>
  )
}