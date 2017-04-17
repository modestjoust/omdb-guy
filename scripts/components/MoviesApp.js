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
    this.onMovieUnstar = this.onMovieUnstar.bind(this);
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

  onMovieStar(movie) {
    this.props.onMovieStar(movie);
  }

  onMovieUnstar(movie) {
    this.props.onMovieUnstar(movie);
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
    var moviesAppStyle = {
      height: 'calc(100% - 60px)',
    };

    var navStyle = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
      borderBottom: '1px solid #eee'
    }

    var navLinkStyle = {
      padding: '12px 36px 0px'
    }

    var contentStyle = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: '100%',
    }

    return (
      <div style={moviesAppStyle}>

        <div style={navStyle}>
          <a href="#" onClick={this.setViewSearch} style={navLinkStyle}><h5>Search Movies</h5></a>
          <a href="#" onClick={this.setViewStarred} style={navLinkStyle}><h5>My Favorites</h5></a>
        </div>

        <div style={contentStyle}>
          <div className="height-100">
            <Search
              onFetchMovies={this.onFetchMovies}
            />
            <RecentSearchesList
              search={this.props.search}
              onSearchItemClick={this.onSearchItemClick}
            />
          </div>
          {this.props.views.viewingMovieDetails ?
            <MovieDetails
              movie={this.props.movies.item}
              starredMovies={this.props.movies.starred}
              goBackToList={this.goBackToList}
              onMovieStar={this.onMovieStar}
              onMovieUnstar={this.onMovieUnstar}
            /> :
            <MoviesList
              movies={this.props.views.viewingStarred ? this.props.movies.starred : this.props.movies.items}
              starredMovies={this.props.movies.starred}
              page={this.props.movies.page}
              totalResults={this.props.views.viewingStarred ? this.props.movies.totalStarred : this.props.movies.totalResults}
              viewingStarred={this.props.views.viewingStarred}
              onMovieClick={this.onMovieClick}
              onMovieStar={this.onMovieStar}
              onMovieUnstar={this.onMovieUnstar}
              handlePageBack={this.handlePageBack}
              handlePageForward={this.handlePageForward}
            />
          }
        </div>

      </div>
    );
  }
}

MoviesApp.propTypes = {
};
