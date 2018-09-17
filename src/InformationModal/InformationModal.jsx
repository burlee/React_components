import React from 'react';
import classes from './InformationModal.scss'

const InformationModal = ({informationValue, closeModal}) => {
  return (
    <div className={classes.InformationModal}>
      <h1>
        {informationValue}
        <button onClick={closeModal}>X</button>
      </h1>
    </div>
  )
}

export default InformationModal;
