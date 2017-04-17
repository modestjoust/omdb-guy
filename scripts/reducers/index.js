import { combineReducers } from 'redux'
import movies from './movies'
import search from './search'
import views from './views'
// import visibilityFilter from './visibilityFilter'

const moviesApp = combineReducers({
  movies,
  search,
  views
  // visibilityFilter
})

export default moviesApp
