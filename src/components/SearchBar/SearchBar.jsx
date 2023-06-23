import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './SearchBar.module.css';

class SearchBar extends Component {
  state = {
    query: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { query } = this.state;
    this.props.searchImages(query);
  };

  handleChange = (event) => {
    this.setState({ query: event.target.value });
  };

  render() {
    const { query } = this.state;

    return (
      <header className={style.Searchbar}>
        <form onSubmit={this.handleSubmit} className={style.SearchForm}>
          <button className={style.SearchFormbutton}>
            <span className="button-label">Search</span>
          </button>

          <input
            className={style.SearchForminput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  searchImages: PropTypes.func.isRequired,
};

export default SearchBar;
