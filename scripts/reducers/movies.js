import {
  REQUEST_MOVIES, RECEIVE_MOVIES,
  REQUEST_MOVIE_DETAILS, RECEIVE_MOVIE_DETAILS,
  STAR_MOVIE,
  BACK_TO_LIST,
  VIEW_SEARCH, VIEW_STARRED
} from '../actions'

function movies(state = {
  isFetching: false,
  items: [],
  starred: []
}, action) {
  switch (action.type) {
    case REQUEST_MOVIES:
      return Object.assign({}, state, {
        isFetching: true,
        searchString: action.string,
        page: action.page
      })
    case RECEIVE_MOVIES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.movies || [],
        lastUpdated: action.receivedAt,
        totalResults: action.totalResults || 0
      })
    case REQUEST_MOVIE_DETAILS:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_MOVIE_DETAILS:
      return Object.assign({}, state, {
        isFetching: false,
        item: action.movie,
        lastUpdated: action.receivedAt,
        viewingMovieDetails: true
      })
    default:
      return state
  }
}

export default movies
