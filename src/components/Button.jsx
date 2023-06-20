import React from 'react';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className="load-more-button">
      Load More
    </button>
  );
};

export default Button;