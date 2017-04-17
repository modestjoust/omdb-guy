import { SAVE_SEARCH } from '../actions'

function search(state = {
  recentSearches: []
}, action) {
  switch (action.type) {
    case SAVE_SEARCH:
      console.log('in SAVE_SEARCH')
      // Get index of identical search in recentSearches
      var index = state.recentSearches.findIndex((el, ind, arr) => {
        // TODO: test also el.options against action.options
        return el.search === action.search
      })
      console.log('index', index)
      console.log('recentSearches: ', state.recentSearches)
      console.log('recentSearches length: ', state.recentSearches.length)

      if (index === 0) {
        // If most recent search string === new search string, do nothing
        console.log('was most recent search');
      } else if (index === -1) {
        // If new search string, push
        console.log('is new search string')
        return Object.assign({}, state, {
          recentSearches: [{
            search: action.search,
            options: action.options,
            dateTime: action.dateTime
          }, ...state.recentSearches]
        })
      } else {
        // Else splice old and push new
        // console.log('current: ', state.recentSearches)
        // var sliced = state.recentSearches.slice();
        // console.log('sliced: ', sliced)
        // var spliced = sliced.splice(index, 1);
        // console.log('new: ', spliced);
        return Object.assign({}, state, {
          recentSearches: [{
            search: action.search,
            options: action.options,
            dateTime: action.dateTime
          }, ...state.recentSearches.slice(0, index), ...state.recentSearches.slice(index + 1)]
        })
      }

    default:
      return state
  }
}

export default search
