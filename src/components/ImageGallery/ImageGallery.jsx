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

export default ImageGallery;
