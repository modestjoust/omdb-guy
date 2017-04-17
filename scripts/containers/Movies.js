import { connect } from 'react-redux'
import { fetchMovies, fetchMovieDetails, starMovie, backToList, viewSearch, viewStarred } from '../actions'
import MoviesApp from '../components/MoviesApp'

const getVisibleMovies = (movies, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return movies
    case 'SHOW_COMPLETED':
      return movies.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return movies.filter(t => !t.completed)
  }
}

const getLastTen = (search) => {
  // return recentSearches//.slice(0,8);
  return search
}

const mapStateToProps = (state) => {
  return {
    // movies: getVisibleMovies(state.movies, state.visibilityFilter)
    movies: state.movies,
    search: getLastTen(state.search),
    views: state.views
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchMovies: (string, page) => {
      console.log('dispatching fetchMovies with page ', page)
      dispatch(fetchMovies(string, page))
    },
    onMovieClick: (id) => {
      dispatch(fetchMovieDetails(id))
    },
    onMovieStar: (id) => {
      dispatch(starMovie(id))
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
