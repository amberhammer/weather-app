import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header( {weatherData, onSearch} ) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput);
      setSearchInput('');
    }
  };

  return (
    <header>
      <div className={styles['site-header']}>
        <h1>Weather App</h1>
        <form onSubmit={handleSearch}>
          <input 
            className={styles['search-bar']} 
            type="text" 
            placeholder="Search for a city..." 
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </form>
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