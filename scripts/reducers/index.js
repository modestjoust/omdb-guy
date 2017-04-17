import { combineReducers } from 'redux'
import movies from './movies'
import search from './search'
import views from './views'

const moviesApp = combineReducers({
  movies,
  search,
  views
})

export default moviesApp
