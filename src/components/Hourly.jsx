import styles from './Hourly.module.css'
import { formatTimeInTimezone } from '../utils/dateUtils';

export default function Hourly( {weatherData, units, unitLabels} ) {
  return (
    <div className={styles['hourly']}>
      <h2>Hourly Forecast</h2>
      <div className={styles['hourly-boxes']}>
        {weatherData.hourly.slice(0, 24).map((hour, index) => (
          <div key={index} className={styles['hourly-item']}>
            <div className={styles['hourly-time']}>
              <p>{formatTimeInTimezone(hour.dt, weatherData.timezone_offset, { hour: 'numeric', minute: '2-digit' })}</p>
            </div>
            <div className={styles['hourly-main']}>
              <div className={styles['hourly-icon-temp']}>
                <img src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`} alt={hour.weather[0].description} />
                <p>{Math.round(hour.temp)}°C</p>
              </div>
              <div className={styles['hourly-description']}>
                <p className={styles['capitalize']}>{hour.weather[0].description}</p>
                <p>Feels Like: {Math.round(hour.feels_like)}°C</p>
              </div>
              <div className={styles['hourly-details']}>
                <p>Wind: {Math.round(units === 'metric' ? hour.wind_speed * 3.6 : hour.wind_speed)} {unitLabels.speed}</p>
                <p>Wind Gust: {Math.round(units === 'metric' ? hour.wind_gust * 3.6 : hour.wind_gust)} {unitLabels.speed}</p>
                <p>Humidity: {Math.round(hour.humidity)}%</p>
              </div>
              <div className={styles['hourly-pop']}>
                <p>Precipitation: {Math.round(hour.pop * 100)}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}