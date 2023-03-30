import { useState } from 'react';
import styles from './Button.module.scss';
import Modal from '../Modal/Modal';

function Button() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={styles.container} onClick={toggleModal}>
        Write
      </button>
      <>
        {isOpen && (
          <Modal />
        )}
      </>
    </>
  )
}
export default Button;