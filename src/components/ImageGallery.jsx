import React from 'react';
import style from'./styles.module.css';

const ImageGallery = ({ images, onClick }) => {
  return (
    <div className={style.Searchbar}>
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
