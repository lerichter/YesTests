import styles from './Message.css'

export default function Message({type, msg}) {
  return (
    <>
      <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
    </>
      
  )
}