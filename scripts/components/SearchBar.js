import React, {PropTypes} from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: ''
    }

    // this.handleClick = this.handleClick.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  // handleClick() {
  //   console.log('clicky')
  //   this.props.onFetchMovies(this.state.searchString)
  // }

  handleInput(e) {
    let t = e.target;
    this.setState({
      searchString: t.value
    })
  }

  render() {
    return (
      <div>
        <input value={this.state.searchString} onChange={this.handleInput} />
        <button onClick={() => this.props.onFetchMovies(this.state.searchString, 1)}>
          search
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = {
};
