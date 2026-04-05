import styles from './Alert.module.css';

export default function Alert( {alert} ) {
  return (
    <div className={styles.alert}>
        <p><strong>{alert?.[0]?.sender_name}:</strong> {alert?.[0]?.description.split('.')[0]} from {new Date(alert?.[0]?.start * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} to {new Date(alert?.[0]?.end * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
    </div>
  )
}