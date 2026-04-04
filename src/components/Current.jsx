import styles from './Current.module.css'
import CurrentBox from './CurrentBox'
import HourlyPreview from './HourlyPreview'
import Conditions from './Conditions'

export default function Current( {weatherData} ) {
  return (
    <div className={styles['current']}>
      <h2>Current Weather</h2>
      <div className={styles['current-hourly']}>
        <CurrentBox weatherData={weatherData} />
        <HourlyPreview weatherData={weatherData} />
      </div>
      <Conditions weatherData={weatherData} />
    </div>
  )
}