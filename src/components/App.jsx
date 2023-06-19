import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      page: 1,
      query: '',
    };
  }

  searchImages = query => {
    const Key = '37472312-0ce04a1f581e4d9faa34fba80';
    axios
      .get(
        `https://pixabay.com/api/?key=${Key}&q=${query}&page=1&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(data => {
        this.setState({ images: data.data.hits, page: 1, query });
        console.log(data.data);
      })
      .catch(error => console.log(error));
  };

  loadMoreImages = () => {
    const { page, images, query } = this.state;
    const Key = '37472312-0ce04a1f581e4d9faa34fba80';
  
    axios
      .get(
        `https://pixabay.com/api/?key=${Key}&q=${query}&page=${page +
          1}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(data => {
        const newImages = data.data.hits;
        const allImages = [...images, ...newImages];
        const newPage = page + 1;
  
        this.setState({ images: allImages, page: newPage });
        console.log(data.data);
      })
      .catch(error => console.log(error));
  };
  

  render() {
    const { images } = this.state;
    const showLoadMoreButton = images.length > 0 && images.length % 12 === 0;
  
    return (
      <div className="App">
        <SearchBar searchImages={this.searchImages} />
        <ImageGallery images={images} />
        {showLoadMoreButton && <Button onClick={this.loadMoreImages} />}
      </div>
    );
  }
}  

export default App;
