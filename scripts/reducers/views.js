import {
  BACK_TO_LIST,
  VIEW_MOVIE_DETAILS,
  VIEW_SEARCH,
  VIEW_STARRED
} from '../actions'

function views(state = {
  viewingMovieDetails: false,
  viewingSearch: true
}, action) {
  switch (action.type) {
    case BACK_TO_LIST:
      return Object.assign({}, state, {
        viewingMovieDetails: false,
      })
    case VIEW_MOVIE_DETAILS:
      return Object.assign({}, state, {
        viewingMovieDetails: true,
      })
    case VIEW_SEARCH:
      return Object.assign({}, state, {
        viewingSearch: true,
        viewingStarred: false,
        viewingMovieDetails: false
      })
    case VIEW_STARRED:
      return Object.assign({}, state, {
        viewingStarred: true,
        viewingSearch: false,
        viewingMovieDetails: false
      })
    default:
      return state
  }
}

export default views
