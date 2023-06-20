import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import './ImageGallery.css';
class ImageGallery extends Component {
  render() {
    const { images } = this.props;

    return (
      <ul className="gallery">
        {images.map(image => (
          <ImageGalleryItem key={image.id} image={image} onClick={this.props.onClick} />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
