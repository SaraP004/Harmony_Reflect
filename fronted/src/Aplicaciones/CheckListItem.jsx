import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/checklist.module.css';

const CheckListItem = ({ button, onConfirm, isVisible, handleButtonClick, imageSrc }) => {
  const [showConfirmButtons, setShowConfirmButtons] = useState(false);

  const handleClick = () => {
    handleButtonClick();
    setShowConfirmButtons(true);
  };

  const handleConfirm = (confirmed) => {
    setShowConfirmButtons(false);
    onConfirm(confirmed);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.checklistItem}>
      <button className={styles['button']} onClick={handleClick}>
        <img src={imageSrc} alt="" className={styles.buttonImage} />
        {button}
      </button>
      {showConfirmButtons && (
        <div className={styles.confirmButtons}>
          <button className={styles['button-confirm-1']} onClick={() => handleConfirm(true)}>
            <FontAwesomeIcon icon={faCheck} />
          </button>
          <button className={styles['button-confirm-2']} onClick={() => handleConfirm(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckListItem;
