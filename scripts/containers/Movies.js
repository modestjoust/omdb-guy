import { connect } from 'react-redux'
import { fetchMovies, fetchMovieDetails, starMovie, unstarMovie, backToList, viewSearch, viewStarred } from '../actions'
import MoviesApp from '../components/MoviesApp'

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    search: state.search,
    views: state.views
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchMovies: (string, page) => {
      dispatch(fetchMovies(string, page))
    },
    onMovieClick: (id) => {
      dispatch(fetchMovieDetails(id))
    },
    onMovieStar: (movie) => {
      dispatch(starMovie(movie))
    },
    onMovieUnstar: (movie) => {
      dispatch(unstarMovie(movie))
    },
    onSearchItemClick: (string) => {
      dispatch(fetchMovies(string, 1))
    },
    goBackToList: () => {
      dispatch(backToList())
    },
    setViewStarred: () => {
      dispatch(viewStarred())
    },
    setViewSearch: () => {
      dispatch(viewSearch())
    }
  }
}

const Movies = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesApp)

export default Movies;
