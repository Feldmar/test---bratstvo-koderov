import { useState } from 'react';
import styles from './Page.module.scss';
import Modal from '../Modal/Modal';

function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseModal = (event: { target: any; currentTarget: any; }) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button className={styles.container} onClick={toggleModal}>
        Написать
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
export default Page;