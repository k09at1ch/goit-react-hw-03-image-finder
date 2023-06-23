import PropTypes from "prop-types";
import React from 'react';
import style from'./ImageGallery.module.css';

const ImageGallery = ({ images, onClick }) => {
  return (
    <div className={style.ImageGallery}>
      {images.map((image) => (
        <img
          key={image.id}
          src={image.webformatURL}
          alt={image.tags}
          className={style.img}
          onClick={() => onClick(image.largeImageURL)}
        />
      ))}
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired
};

export default ImageGallery;
