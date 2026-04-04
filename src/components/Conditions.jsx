import styles from './Conditions.module.css'

export default function Conditions( {weatherData} ) {
  return (
    <div className={styles['conditions']}>
      <h3>Today's Conditions</h3>
      <div className={styles['conditions-boxes']}>
        <div className={styles['conditions-item']}>
          <p>Sunrise: {new Date(weatherData.current.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
          <p>Sunset: {new Date(weatherData.current.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
        <div className={styles['conditions-item']}>
          <h4>Wind</h4>
          <p>Speed: {weatherData.current.wind_speed} mph</p>
          <p>Gust: {weatherData.current.wind_gust} mph</p>
        </div>
        <div className={styles['conditions-item']}>
          <h4>Humidity</h4>
          <p>{weatherData.current.humidity}%</p>
        </div>
        <div className={styles['conditions-item']}>
          <h4>Pressure</h4>
          <p>{weatherData.current.pressure} hPa</p>
        </div>
        <div className={styles['conditions-item']}>
          <h4>Visibility</h4>
          <p>{weatherData.current.visibility} mi</p>
        </div>
        <div className={styles['conditions-item']}>
          <h4>UV Index</h4>
          <p>{weatherData.current.uvi}</p>
        </div>
      </div> 
    </div>
  )
}