import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import style from './App.module.css';
import handleSearchImages from './FetchFunc';

class App extends Component {
  static propTypes = {
    apiKey: PropTypes.string.isRequired,
  };

  state = {
    images: [],
    page: 1,
    query: '',
    isLoading: false,
    showModal: false,
    selectedImageUrl: '',
  };

  handleSearchImages = (query, page = 1) => {
    const { apiKey } = this.props;

    handleSearchImages(query, page, apiKey)
      .then((newImages) => {
        if (page === 1) {
          this.setState({
            images: newImages,
            page: 1,
            query,
            isLoading: false,
          });
        } else {
          const { images } = this.state;
          const allImages = [...images, ...newImages];

          this.setState({
            images: allImages,
            page,
            query,
            isLoading: false,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({ isLoading: false });
      });
  };

  openModal = (imageUrl) => {
    this.setState({
      showModal: true,
      selectedImageUrl: imageUrl,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      selectedImageUrl: '',
    });
  };

  render() {
    const { images, isLoading, showModal, selectedImageUrl } = this.state;
    const showLoadMoreButton = images.length > 0 && images.length % 12 === 0;

    return (
      <div className={style.App}>
        <SearchBar searchImages={this.handleSearchImages} />
        {isLoading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading images...</p>
          </div>
        ) : (
          <div>
            <ImageGallery images={images} onClick={this.openModal} />
          </div>
        )}
        {showLoadMoreButton && (
          <div className={style.LoadMoreButton}>
            <Button
              className={style.Button}
              onClick={() => this.handleSearchImages(this.state.query, this.state.page + 1)}
            />
          </div>
        )}
        {showModal && <Modal imageUrl={selectedImageUrl} onClose={this.closeModal} />}
      </div>
    );
  }
}

export default App;
