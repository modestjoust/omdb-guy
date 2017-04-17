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
    var recentSearchesStyle = {
      backgroundColor: '#fff',
      borderRadius: '.4rem',
      border: '1px solid #d1d1d1',
      paddingBottom: '15px',
      WebkitBoxShadow: 'inset 3px 3px 14px -7px rgba(0,0,0,0.75)',
      MozBoxShadow: 'inset 3px 3px 14px -7px rgba(0,0,0,0.75)',
      boxShadow: 'inset 3px 3px 14px -7px rgba(0,0,0,0.75)'
    }

    var listStyle = {
      overflow: 'auto',
      height: 'calc(100vh - 297px)'
    }

    return (
      <div className="container" style={recentSearchesStyle}>
        <h4 style={{textAlign: 'center', paddingTop: '15px'}}>Recent Searches</h4>
        <div style={listStyle}>
          {this.props.search.recentSearches.length > 0 ?
            this.props.search.recentSearches.map(searchItem => <SearchItem key={searchItem.dateTime} data={searchItem} handleClick={this.handleClick}/>)
            : <p style={{textAlign: 'center'}}>No recent searches...</p>
          }
        </div>
      </div>
    );
  }
}

RecentSearchesList.propTypes = {
};
