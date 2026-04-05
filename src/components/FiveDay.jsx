import styles from './FiveDay.module.css';

export default function FiveDay( {weatherData} ) {
  const options = { weekday: 'long', month: 'long', day: 'numeric' };

  return (
    <div className={styles['five-day']}>
      <h2>5 Day Forecast</h2>
      <div className={styles['five-day-boxes']}>
        {weatherData.daily.slice(1, 6).map((day, index) => (
          <div key={index} className={styles['five-day-item']}>
            <div className={styles['five-day-date']}>
              <p>{new Date(day.dt * 1000).toLocaleDateString('en-US', options)}</p>
            </div>
            <div className={styles['five-day-main']}>
              <div className={styles['five-day-icon-temp']}>
                <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt={day.weather[0].description} />
                <p>H: {Math.round(day.temp.max)}°C</p>
                <p>L: {Math.round(day.temp.min)}°C</p>
              </div>
              <div className={styles['five-day-description']}>
                <p className={styles['capitalize']}>{day.weather[0].description}</p>
              </div>
              <div className={styles['five-day-details']}>
                <p>Wind: {Math.round(day.wind_speed * 3.6)} km/h</p>
                <p>Wind Gust: {Math.round(day.wind_gust * 3.6)} km/h</p>
                <p>Humidity: {Math.round(day.humidity)}%</p>
              </div>
              <div className={styles['five-day-pop']}>
                <p>Precipitation: {Math.round(day.pop * 100)}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}