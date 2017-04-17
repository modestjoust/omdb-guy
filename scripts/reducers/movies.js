import {
  REQUEST_MOVIES, RECEIVE_MOVIES,
  REQUEST_MOVIE_DETAILS, RECEIVE_MOVIE_DETAILS,
  STAR_MOVIE, UNSTAR_MOVIE
} from '../actions'

function movies(state = {
  isFetching: false,
  items: [],
  starred: [],
  totalStarred: 0
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
    case STAR_MOVIE:
      return Object.assign({}, state, {
        starred: [{
          Poster: action.movie.Poster,
          Title: action.movie.Title,
          Type: action.movie.Type,
          Year: action.movie.Year,
          imdbID: action.movie.imdbID,
          starredDate: action.starredDate
        }, ...state.starred],
        totalStarred: state.totalStarred + 1
      })
    case UNSTAR_MOVIE:
      var index = state.starred.findIndex((el, ind, arr) => {
        return el.imdbID === action.movie.imdbID
      })
      return Object.assign({}, state, {
        starred: [...state.starred.slice(0, index), ...state.starred.slice(index + 1)],
        totalStarred: state.totalStarred - 1
      })
    default:
      return state
  }
}

export default movies
