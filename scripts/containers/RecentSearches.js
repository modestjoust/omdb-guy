import { connect } from 'react-redux'
import { fetchMovies } from '../actions'
import RecentSearchesList from '../components/RecentSearchesList'

const getLastTen = (search) => {
  // return recentSearches//.slice(0,8);
  return search
}

const mapStateToProps = (state) => {
  return {
    // movies: getVisibleMovies(state.movies, state.visibilityFilter)
    search: getLastTen(state.search)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchItemClick: (string) => {
      dispatch(fetchMovies(string))
    }
  }
}

const RecentSearches = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentSearchesList)

export default RecentSearches;
