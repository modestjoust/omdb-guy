import React, { PropTypes } from 'react';
import MoviesList from './MoviesList';
import MovieDetails from './MovieDetails';
import Search from './Search';
import RecentSearchesList from './RecentSearchesList';

export default class MoviesApp extends React.Component {
  constructor(props) {
    super(props);

    this.onMovieClick = this.onMovieClick.bind(this);
    this.onMovieStar = this.onMovieStar.bind(this);
    this.onFetchMovies = this.onFetchMovies.bind(this);
    this.goBackToList = this.goBackToList.bind(this);
    this.handlePageBack = this.handlePageBack.bind(this);
    this.handlePageForward = this.handlePageForward.bind(this);
    this.onSearchItemClick = this.onSearchItemClick.bind(this);
    this.setViewStarred = this.setViewStarred.bind(this);
    this.setViewSearch = this.setViewSearch.bind(this);
  }

  goBackToList() {
    this.props.goBackToList();
  }

  onMovieClick(id) {
    this.props.onMovieClick(id);
  }

  onMovieStar(id) {
    this.props.onMovieStar(id);
  }

  onFetchMovies(string, page) {
    this.props.onFetchMovies(string, page);
  }

  onSearchItemClick(string) {
    this.props.onSearchItemClick(string);
  }

  handlePageBack() {
    this.props.onFetchMovies(this.props.movies.searchString, this.props.movies.page - 1);
  }

  handlePageForward() {
    this.props.onFetchMovies(this.props.movies.searchString, this.props.movies.page + 1);
  }

  setViewStarred() {
    this.props.setViewStarred()
  }

  setViewSearch() {
    this.props.setViewSearch()
  }

  render() {
    console.log('MoviesApp ', this.props);

    var moviesAppStyle = {

    };

    var navStyle = {

    }

    var contentStyle = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }

    var searchStyle = {};

    var moviesListSyle = {};

    var recentSearchesListStyle = {};

    return (
      <div style={moviesAppStyle}>

        <div style={navStyle}>
          <a href="#" onClick={this.setViewSearch}>Search Movies</a>
          <a href="#" onClick={this.setViewStarred}>My Starred</a>
        </div>

        <div style={contentStyle}>
          <div>
            <Search
              onFetchMovies={this.onFetchMovies}
              style={searchStyle}
            />
            <RecentSearchesList
              search={this.props.search}
              onSearchItemClick={this.onSearchItemClick}
              style={recentSearchesListStyle}
            />
          </div>
          {this.props.views.viewingMovieDetails ?
            <MovieDetails
              movie={this.props.movies.item}
              goBackToList={this.goBackToList}
            /> :
            <MoviesList
              movies={this.props.views.viewingStarred ? this.props.movies.starred : this.props.movies.items}
              page={this.props.movies.page}
              totalResults={this.props.movies.totalResults}
              onMovieClick={this.onMovieClick}
              handlePageBack={this.handlePageBack}
              handlePageForward={this.handlePageForward}
              style={moviesListSyle}
            />
          }
        </div>

      </div>
    );
  }
}

MoviesApp.propTypes = {
};
