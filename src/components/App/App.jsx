//дайте будь ласка всі помилки в 1 відео, бо я  так не встигну до здачі всіх дз. Як тільки ви повернете завдання на допрацювання або приймете, я цей рядок приберу
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import style from './App.module.css';
import handleSearchImages from '../../FetchFunc';

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
  performSearch = () => {
    const { query, page } = this.state;
    this.handleSearchImages(query, page);
  };

  handleSearchImages = (query, page = 1) => {
    const { apiKey } = this.props;
    handleSearchImages(query, page, apiKey)
      .then((newImages) => {
        if (page === 1) {
          this.setState({
            images: newImages,
            page: 1,
            isLoading: false,
          });
        } else {
          const { images } = this.state;
          const allImages = [...images, ...newImages];

          this.setState({
            images: allImages,
            page,
            isLoading: false,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({ isLoading: false });
      });
  };

  fetchImages = () => {
    this.setState(
      (prevState) => ({
        page: prevState.page + 1,
      }),
      this.performSearch
    );
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
              onClick={this.fetchImages}
            >
              Load More
            </Button>
          </div>
        )}
        {showModal && <Modal imageUrl={selectedImageUrl} onClose={this.closeModal} />}
      </div>
    );
  }
}

export default App;
