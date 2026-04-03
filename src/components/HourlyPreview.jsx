export default function HourlyPreview( {weatherData} ) {
  return (
    <div className="hourly-preview">
      <h3>Hourly Forecast</h3>
      <div className="hourly-preview-boxes">
        {weatherData.hourly.slice(0, 5).map((hour, index) => (
          <div key={index} className="hourly-preview-box">
            <p>{new Date(hour.dt * 1000).getHours()}:00</p>
            <p>{hour.weather[0].icon}</p>
            <p>{hour.temp}°F</p>
            <p>{hour.weather[0].main}</p>
          </div>
        ))}
      </div>
    </div>
  )
}