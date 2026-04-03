export default function CurrentBox( {weatherData}) {
  return (
    <div className="current-box">
      <p>{weatherData.current.weather[0].icon}</p>
      <p>Temperature: {weatherData.current.temp}°F</p>
      <p>{weatherData.current.weather[0].description}</p>
      <p>Feels Like: {weatherData.current.feels_like}°F</p>
    </div>
  )
}