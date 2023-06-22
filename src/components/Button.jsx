import React from 'react';
import style from './styles.module.css';

const Button = ({ onClick }) => {
  return (
    <button type="submit" onClick={onClick} className={style.Button}>
      Load More
    </button>
  );
};

export default Button;
