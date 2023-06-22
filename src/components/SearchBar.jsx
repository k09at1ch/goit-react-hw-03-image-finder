import React, { Component } from 'react';
import style from './styles.module.css'
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { query } = this.state;
    this.props.searchImages(query);
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  render() {
    const { query } = this.state;

    return (
      <header className={style.SearchForm}>
        <form className="form" onSubmit={this.handleSubmit}>
          <button className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
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

export default SearchBar;