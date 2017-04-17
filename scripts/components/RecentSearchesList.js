import React, {PropTypes} from 'react';
import SearchItem from './SearchItem';

export default class RecentSearchesList extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(data) {
    this.props.onSearchItemClick(data.search)
  }

  render() {
    return (
      <div>
        <h4>Recent Searches</h4>
        {this.props.search.recentSearches.map(searchItem => <SearchItem key={searchItem.dateTime} data={searchItem} handleClick={this.handleClick}/>)}
      </div>
    );
  }
}

RecentSearchesList.propTypes = {
};
