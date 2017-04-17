import React, {PropTypes} from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: ''
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    if (this.state.searchString.length > 0)
      this.props.onFetchMovies(this.state.searchString, 1)
  }

  handleInput(e) {
    let t = e.target;
    this.setState({
      searchString: t.value
    })
  }

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <label htmlFor="titleSearch">Search by title:</label>
            <input type="text" id="titleSearch" value={this.state.searchString} onChange={this.handleInput} />
            <button onClick={this.handleClick}>
              search
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
};
