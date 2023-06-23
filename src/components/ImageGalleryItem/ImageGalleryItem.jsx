import React from 'react';
import style from './ImageGalleryItem.module.css'
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

export default ImageGalleryItem;