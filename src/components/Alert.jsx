import styles from './Alert.module.css';
import { formatTimeInTimezone } from '../utils/dateUtils';
// import { Alert-Triangle } from 'react-feather';

export default function Alert( {alert, timezoneOffset} ) {
  return (
    <div className={styles.alert}>
      {/* <Alert-Triangle size={24} color="#ff4d4d" /> */}
      <p><strong>{alert?.[0]?.sender_name}:</strong> {alert?.[0]?.description.split('.')[0]} from {formatTimeInTimezone(alert?.[0]?.start, timezoneOffset, { hour: 'numeric', minute: '2-digit' })} to {formatTimeInTimezone(alert?.[0]?.end, timezoneOffset, { hour: 'numeric', minute: '2-digit' })}</p>
    </div>
  )
}