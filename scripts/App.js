import React, { Component } from 'react';

import Movies from './containers/Movies';


export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Search /> */}
        <Movies />
        {/* <RecentSearches /> */}
      </div>
    );
  }
}
