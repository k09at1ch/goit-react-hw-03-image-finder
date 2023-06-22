import React from 'react';
import style from'./styles.module.css';
const Button = ({ onClick }) => {
  return (
    <button type='button' onClick={onClick} className={style.Button}>
      Load More
    </button>
  );
};

export default Button;