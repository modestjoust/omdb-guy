import { connect } from 'react-redux'
// import { toggleMovie } from '../actions'
import SearchBar from '../components/SearchBar'
import { doThing, fetchMovies } from '../actions'

// const getVisibleMovies = (movies, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       return movies
//     case 'SHOW_COMPLETED':
//       return movies.filter(t => t.completed)
//     case 'SHOW_ACTIVE':
//       return movies.filter(t => !t.completed)
//   }
// }

const mapStateToProps = (state) => {
  return {
    // movies: getVisibleMovies(state.movies, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchMovies: (string) => {
      dispatch(fetchMovies(string))
    }
  }
}

const Movies = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)

export default Movies;
