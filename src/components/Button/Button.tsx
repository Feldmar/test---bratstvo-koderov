import { useState } from 'react';
import styles from './Button.module.scss';
import Modal from '../Modal/Modal';

function Button() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className={styles.container} onClick={toggleModal}>
        Write
      </button>
      <>
        {isOpen && (
        <div className={styles.overlay} onClick={handleCloseModal}>
          <Modal />
        </div>
        )}
      </>
    </>
  )
}
export default Button;