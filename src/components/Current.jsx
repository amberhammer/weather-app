import styles from './Current.module.css'
import CurrentBox from './CurrentBox'
import HourlyPreview from './HourlyPreview'
import Conditions from './Conditions'

export default function Current( {weatherData, unitLabels} ) {
  return (
    <div className={styles['current']}>
      <h2>Current Weather</h2>
      <div className={styles['current-hourly']}>
        <CurrentBox weatherData={weatherData} unitLabels={unitLabels} />
        <HourlyPreview weatherData={weatherData} unitLabels={unitLabels} />
      </div>
      <Conditions weatherData={weatherData} unitLabels={unitLabels} />
    </div>
  )
}