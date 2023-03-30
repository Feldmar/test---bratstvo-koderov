import Form from '../Form/Form';
import styles from './Modal.module.scss'

function Modal() {
  return (
      <div className={styles.content}>
        <h2 className={styles.title}> Стать партнёром проекта</h2>
        <Form />
      </div>
  )
}
export default Modal;