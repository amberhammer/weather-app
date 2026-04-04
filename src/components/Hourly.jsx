import styles from './Hourly.module.css'

export default function Hourly( {weatherData} ) {
  return (
    <div className={styles['hourly']}>
      <h2>Hourly Forecast</h2>
      <div className={styles['hourly-boxes']}>
        {weatherData.hourly.slice(0, 24).map((hour, index) => (
          <div key={index} className={styles['hourly-item']}>
            <div className={styles['hourly-time']}>
              <p>{new Date(hour.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            </div>
            <div className={styles['hourly-main']}>
              <div className={styles['hourly-icon-temp']}>
                <img src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`} alt={hour.weather[0].description} />
                <p>{hour.temp}°C</p>
              </div>
              <div className={styles['hourly-description']}>
                <p>{hour.weather[0].description}</p>
                <p>Feels Like: {hour.feels_like}°C</p>
              </div>
              <div className={styles['hourly-details']}>
                <p>Wind: {hour.wind_speed} mph</p>
                <p>Wind Gust: {hour.wind_gust} mph</p>
                <p>Humidity: {hour.humidity}%</p>
              </div>
              <div className={styles['hourly-pop']}>
                <p>Precipitation: {hour.pop * 100}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}