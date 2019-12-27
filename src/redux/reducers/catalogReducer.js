import * as ACTION_TYPES from '../actions/Catalog/actionsTypes'

export const initialState = {
  movies: [],
  visibleMovies: []
}

const Catalog = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_MOVIES:
      var newState = { ...state, movies: action.movies }
      break
    default:
      return state
  }
  return newState
}

export default Catalog
