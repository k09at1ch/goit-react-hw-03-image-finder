import PropTypes from "prop-types";
import React from 'react';
import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onClick }) => {
  const handleImageClick = () => {
    onClick(image.largeImageURL);
  };

  return (
    <li className={style.ImageGalleryItem} onClick={handleImageClick}>
      <img className={style.ImageGalleryItemImage} src={image.webformatURL} alt={image.tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func
};

export default ImageGalleryItem;
