import styles from './CurrentBox.module.css'

export default function CurrentBox( {weatherData}) {
  return (
    <div className={styles['current-box']}>
      <img src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}.png`} alt={weatherData.current.weather[0].description} />
      <p>Temperature: {Math.round(weatherData.current.temp)}°C</p>
      <p className={styles['capitalize']}>{weatherData.current.weather[0].description}</p>
      <p>Feels like {Math.round(weatherData.current.feels_like)}°C</p>
      <p>H: {Math.round(weatherData.daily[0].temp.max)}°C</p>
      <p>L: {Math.round(weatherData.daily[0].temp.min)}°C</p>
    </div>
  )
}