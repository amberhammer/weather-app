export default function Hourly( {weatherData} ) {
  return (
    <div className="hourly">
      <h2>Hourly Forecast</h2>
      <div className="hourly-boxes">
        {weatherData.hourly.slice(0, 24).map((hour, index) => (
          <div key={index} className="hourly-item">
            <p>{new Date(hour.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            <img src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`} alt={hour.weather[0].description} />
            <p>{hour.temp}°C</p>
            <p>{hour.weather[0].description}</p>
            <p>Feels Like: {hour.feels_like}°C</p>
            <p>Wind: {hour.wind_speed} mph</p>
            <p>Wind Gust: {hour.wind_gust} mph</p>
            <p>Humidity: {hour.humidity}%</p>
            <p>Precipitation: {hour.pop * 100}%</p>
          </div>
        ))}
      </div>
    </div>
  )
}