import CurrentBox from './CurrentBox'
import HourlyPreview from './HourlyPreview'
import Conditions from './Conditions'

export default function Current( {weatherData} ) {
  return (
    <div className="current">
      <h2>Current Weather</h2>
      <CurrentBox weatherData={weatherData} />
      <HourlyPreview weatherData={weatherData} />
      <Conditions weatherData={weatherData} />
    </div>
  )
}