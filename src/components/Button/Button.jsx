import PropTypes from "prop-types"
import React from 'react';
import style from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button type="submit" onClick={onClick} className={style.Button}>
      Load More
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Button;
