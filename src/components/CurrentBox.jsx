import styles from './CurrentBox.module.css'

export default function CurrentBox( {weatherData}) {
  return (
    <div className={styles['current-box']}>
      <img src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}.png`} alt={weatherData.current.weather[0].description} />
      <p>Temperature: {weatherData.current.temp}°C</p>
      <p>{weatherData.current.weather[0].description}</p>
      <p>Feels like {weatherData.current.feels_like}°C</p>
      <p>H: {weatherData.daily[0].temp.max}°C</p>
      <p>L: {weatherData.daily[0].temp.min}°C</p>
    </div>
  )
}