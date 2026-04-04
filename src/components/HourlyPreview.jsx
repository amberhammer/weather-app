import styles from './HourlyPreview.module.css'

export default function HourlyPreview( {weatherData} ) {
  return (
    <div className={styles['hourly-preview']}>
      <h3>Hourly</h3>
      <div className={styles['hourly-preview-boxes']}>
        {weatherData.hourly.slice(0, 5).map((hour, index) => (
          <div key={index} className={styles['hourly-preview-item']}>
            <p>{new Date(hour.dt * 1000).getHours()}:00</p>
            <img src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`} alt={hour.weather[0].description} />
            <p>{hour.temp}°C</p>
            <p>{hour.weather[0].main}</p>
          </div>
        ))}
      </div>
    </div>
  )
}