import fetch from 'isomorphic-fetch'

export const SAVE_SEARCH = 'SAVE_SEARCH'
export const saveSearch = (search, options) => {
  return {
    type: SAVE_SEARCH,
    search,
    options,
    dateTime: Date.now()
  }
}

export const BACK_TO_LIST = 'BACK_TO_LIST'
export const backToList = () => {
  return {
    type: BACK_TO_LIST,
  }
}

export const REQUEST_MOVIES = 'REQUEST_MOVIES'
function requestMovies(string, page) {
  return {
    type: REQUEST_MOVIES,
    string,
    page
  }
}

export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
function receiveMovies(string, json) {
  console.log('receive movies json: ', json)
  return {
    type: RECEIVE_MOVIES,
    string,
    movies: json.Search,
    totalResults: json.totalResults,
    receivedAt: Date.now()
  }
}

export const REQUEST_MOVIE_DETAILS = 'REQUEST_MOVIE_DETAILS'
function requestMovieDetails(id) {
  return {
    type: REQUEST_MOVIE_DETAILS,
    id
  }
}

export const RECEIVE_MOVIE_DETAILS = 'RECEIVE_MOVIE_DETAILS'
function receiveMovieDetails(id, json) {
  console.log('receive movie, ', json)
  return {
    type: RECEIVE_MOVIE_DETAILS,
    id,
    movie: json,
    receivedAt: Date.now()
  }
}

export const STAR_MOVIE = 'STAR_MOVIE'
export const starMovie = (id) => {
  return {
    type: STAR_MOVIE,
    id
  }
}

export const VIEW_MOVIE_DETAILS = 'VIEW_MOVIE_DETAILS'
export const viewMovieDetails = () => {
  return {
    type: VIEW_MOVIE_DETAILS
  }
}

export const VIEW_SEARCH = 'VIEW_SEARCH'
export const viewSearch = () => {
  return {
    type: VIEW_SEARCH
  }
}

export const VIEW_STARRED = 'VIEW_STARRED'
export const viewStarred = () => {
  return {
    type: VIEW_STARRED
  }
}

// function fetchPosts(subreddit) {
//   return dispatch => {
//     dispatch(requestPosts(subreddit))
//     return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//       .then(response => response.json())
//       .then(json => dispatch(receivePosts(subreddit, json)))
//   }
// }

// function fetchMovies(string, page) {
//   return dispatch => {
//     dispatch(requestMovies(string))
//     return fetch('http://www.omdbapi.com/?s=' + string)
//       .then(response => response.json())
//       .then(json => dispatch(receiveMovies(string, json)))
//   }
// }

function fetchMovieDetails(id) {
  return dispatch => {
    dispatch(requestMovieDetails(id))
    return fetch('http://www.omdbapi.com/?i=' + id + '&plot=full')
      .then(response => response.json())
      .then(json => dispatch(receiveMovieDetails(id, json)))
  }
}

export function fetchMovies(string, pg) {
  return function(dispatch) {
    console.log('fetching movies with page: ', pg)
    var page = pg ? pg : 1
    dispatch(viewSearch())
    dispatch(requestMovies(string, page))
    dispatch(saveSearch(string, {}))
    return fetch('http://www.omdbapi.com/?s=' + string + '&type=movie' + '&page=' + page)
      .then(response => response.json())
      .then(json => dispatch(receiveMovies(string, json)))
  }
}

export function fetchMovieDetails(id) {
  console.log('fetching movie details, id=', id)
  return dispatch => {
    dispatch(requestMovieDetails(id))
    return fetch('http://www.omdbapi.com/?i=' + id) //+ '&plot=full')
      .then(response => response.json())
      .then(json => dispatch(receiveMovieDetails(id, json)))
      .then(() => dispatch(viewMovieDetails()))
  }
}
