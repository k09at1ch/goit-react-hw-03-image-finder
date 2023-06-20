import React from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images, onClick }) => {
  return (
    <div className="image-gallery">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.webformatURL}
          alt={image.tags}
          className="image-gallery-item"
          onClick={() => onClick(image.largeImageURL)}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
