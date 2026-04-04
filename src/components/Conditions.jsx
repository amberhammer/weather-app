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
          <p>Speed: {Math.round(weatherData.current.wind_speed * 3.6)} km/h</p>
          <p>Gust: {Math.round(weatherData.current.wind_gust * 3.6)} km/h</p>
        </div>
        <div className={styles['conditions-item']}>
          <h4>Humidity</h4>
          <p>{Math.round(weatherData.current.humidity)}%</p>
        </div>
        <div className={styles['conditions-item']}>
          <h4>Pressure</h4>
          <p>{Math.round(weatherData.current.pressure)} hPa</p>
        </div>
        <div className={styles['conditions-item']}>
          <h4>Visibility</h4>
          <p>{Math.round(weatherData.current.visibility)} m</p>
        </div>
        <div className={styles['conditions-item']}>
          <h4>UV Index</h4>
          <p>{weatherData.current.uvi}</p>
        </div>
      </div> 
    </div>
  )
}