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

  onMovieStar(id) {
    this.props.onMovieStar(id)
  }

  render() {
    // console.log('MoviesList ', this.props)
    var movieListStyle = {
      width: '100%'
    }
    return (
      <div style={movieListStyle}>

        {this.props.movies && this.props.movies.length ?
          this.props.movies.map((movie) => {
            return (
              <MovieItem
                key={movie.imdbID}
                data={movie}
                onMovieClick={() => this.props.onMovieClick(movie.imdbID)}
                onMovieStar={this.onMovieStar}
              />
            )
          })
          :
          <div style={{backgroundColor: '#dde'}}>
            No movies :(
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
