export default function CurrentBox( {weatherData}) {
  return (
    <div className="current-box">
      <img src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}.png`} alt={weatherData.current.weather[0].description} />
      <p>Temperature: {weatherData.current.temp}°C</p>
      <p>{weatherData.current.weather[0].description}</p>
      <p>Feels Like: {weatherData.current.feels_like}°C</p>
    </div>
  )
}