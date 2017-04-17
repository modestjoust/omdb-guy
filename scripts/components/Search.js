import React, {PropTypes} from 'react';
import SearchBar from './SearchBar';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchBar onFetchMovies={this.props.onFetchMovies}/>
      </div>
    );
  }
}

Search.propTypes = {
};
