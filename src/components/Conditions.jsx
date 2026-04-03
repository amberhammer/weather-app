export default function Conditions( {weatherData} ) {
  return (
    <div className="conditions">
      <h3>Today's Conditions</h3>
      <div className="conditions-box">
        <p>Sunrise: {new Date(weatherData.current.sunrise * 1000).toLocaleTimeString()}</p>
        <p>Sunset: {new Date(weatherData.current.sunset * 1000).toLocaleTimeString()}</p>
      </div>
      <div className="conditions-box">
        <h4>Wind</h4>
        <p>Speed: {weatherData.current.wind_speed} mph</p>
        <p>Gust: {weatherData.current.wind_gust} mph</p>
      </div>
      <div className="conditions-box">
        <h4>Humidity</h4>
        <p>{weatherData.current.humidity}%</p>
      </div>
      <div className="conditions-box">
        <h4>Atmospheric Pressure</h4>
        <p>{weatherData.current.pressure} hPa</p>
      </div>
      <div className="conditions-box">
        <h4>Visibility</h4>
        <p>{weatherData.current.visibility} mi</p>
      </div>
      <div className="conditions-box">
        <h4>UV Index</h4>
        <p>{weatherData.current.uvi}</p>
      </div>
    </div>
  )
}