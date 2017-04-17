import React, { PropTypes } from 'react'
import MovieItem from './MovieItem'
import Pagination from './Pagination'

export default class MoviesList extends React.Component {
  constructor(props) {
    super(props);

    this.onMovieClick = this.onMovieClick.bind(this);
    this.onMovieStar = this.onMovieStar.bind(this)
  }

  onMovieClick(id) {
    this.props.onMovieClick(id)
  }

  onMovieStar(movie) {
    if (!this.isStarred(movie)) {
      this.props.onMovieStar(movie)
    } else {
      this.props.onMovieUnstar(movie)
    }
  }

  isStarred(movie) {
    var index = this.props.starredMovies.findIndex((el, ind, arr) => {
      return movie.imdbID === el.imdbID;
    });
    return index >= 0;
  }

  render() {
    var hasMovies = this.props.movies && this.props.movies.length;
    var movieListStyle = {
      paddingTop: '30px',
    }

    var noMoviesStyle = {
      backgroundColor: '#cfd2e7',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      borderRadius: '.4rem',
      WebkitBoxShadow: 'inset 3px 3px 14px -7px rgba(0,0,0,0.75)',
      MozBoxShadow: 'inset 3px 3px 14px -7px rgba(0,0,0,0.75)',
      boxShadow: 'inset 3px 3px 14px -7px rgba(0,0,0,0.75)'
    }

    var tableHeaderStyle = {
      backgroundColor: '#f4f4f4',
      borderRadius: '.4rem',
      height: '38px',
    }

    return (
      <div className="container" style={movieListStyle}>

        {hasMovies ?
          <div>
            <div className="row" style={tableHeaderStyle}>
              <div className="column column-60">TITLE</div>
              <div className="column">RELEASE YEAR</div>
              {this.props.viewingStarred ?
                <div className="column">ADDED</div>
                  : null
              }
              <div className="column"></div>
            </div>
            {this.props.movies.map((movie) => {
              return (
                <MovieItem
                  key={movie.imdbID}
                  data={movie}
                  isStarred={this.isStarred(movie)}
                  onMovieClick={() => this.props.onMovieClick(movie.imdbID)}
                  onMovieStar={this.onMovieStar}
                  viewingStarred={this.props.viewingStarred}
                />
              )
            })}
          </div>
          :
          <div className="row height-100" style={noMoviesStyle}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center'}}>
              <h2>There's nothing here! <i className="fa fa-frown-o"></i></h2>
              {this.props.viewingStarred ?
                <p>Search for some movies, then click the star to add them to your favorites!</p> :
                <p>Try searching for some movies!</p>
              }
            </div>
          </div>
        }

        {this.props.movies && this.props.movies.length ?
          <Pagination
            page={this.props.page}
            totalResults={this.props.totalResults}
            handlePageBack={() => this.props.handlePageBack()}
            handlePageForward={() => this.props.handlePageForward()}
          /> :
          null
        }
      </div>
    );
  }
}

MoviesList.propTypes = {
};
