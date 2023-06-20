import React from 'react';
import './Modal.css';

const Modal = ({ imageUrl, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <img src={imageUrl} alt="Selected" />
        <button onClick={onClose} className="modal-close-button">
         X
        </button>
      </div>
    </div>
  );
};

export default Modal;
