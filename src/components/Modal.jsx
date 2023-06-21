import React, { Component } from 'react';
import style from'./styles.module.css';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleClickOutside = (event) => {
    if (event.target.classList.contains('modal-overlay')) {
      this.props.onClose();
    }
  };

  render() {
    const { imageUrl, onClose } = this.props;

    return (
      <div className={style.Overlay} onClick={this.handleClickOutside}>
        <div className={style.Modal}>
          <img src={imageUrl} alt="Selected" />
          {/* <button onClick={onClose} className="modal-close-button">
            X
          </button> */}
        </div>
      </div>
    );
  }
}

export default Modal;
