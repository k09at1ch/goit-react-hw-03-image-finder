import React, { Component } from 'react';
import style from './styles.module.css';

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
    if (event.target.classList.contains(style.Overlay)) {
      this.props.onClose();
    }
  };

  render() {
    const { imageUrl } = this.props;

    return (
      <div className={style.Overlay} onClick={this.handleClickOutside}>
        <div className={style.Modal}>
          <img src={imageUrl} alt="Selected" />
        </div>
      </div>
    );
  }
}

export default Modal;
