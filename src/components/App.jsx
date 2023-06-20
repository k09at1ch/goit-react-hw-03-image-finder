import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import axios from 'axios';
import Modal from './Modal';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      page: 1,
      query: '',
      isLoading: false,
      showModal: false,
      selectedImageUrl: '',
    };
  }

  searchImages = query => {
    const Key = '37472312-0ce04a1f581e4d9faa34fba80';

    this.setState({ isLoading: true });

    axios
      .get(
        `https://pixabay.com/api/?key=${Key}&q=${query}&page=1&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(data => {
        this.setState({
          images: data.data.hits,
          page: 1,
          query,
          isLoading: false,
        });
        console.log(data.data);
      })
      .catch(error => {
        console.log(error);
        this.setState({ isLoading: false });
      });
  };

  loadMoreImages = event => {
    event.preventDefault();
    const { page, images, query } = this.state;
    const Key = '37472312-0ce04a1f581e4d9faa34fba80';
    this.setState({ isLoading: true });

    axios
      .get(
        `https://pixabay.com/api/?key=${Key}&q=${query}&page=${page + 1}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(data => {
        const newImages = data.data.hits;
        const allImages = [...images, ...newImages];
        const newPage = page + 1;

        this.setState({ images: allImages, page: newPage, isLoading: false });
        console.log(data.data);
      })
      .catch(error => {
        console.log(error);
        this.setState({ isLoading: false });
      });
  };

  openModal = imageUrl => {
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
      <div className="App">
        <SearchBar searchImages={this.searchImages} />
        {isLoading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading images...</p>
          </div>
        ) : (
          <div>
            <ImageGallery images={images} onClick={this.openModal} />
            {showLoadMoreButton && <Button onClick={this.loadMoreImages} />}
            {showModal && (
              <Modal imageUrl={selectedImageUrl} onClose={this.closeModal} />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
