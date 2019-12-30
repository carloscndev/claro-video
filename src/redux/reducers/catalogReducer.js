import * as ACTION_TYPES from '../actions/Catalog/actionsTypes'

export const initialState = {
  movies: [],
  visibleMovies: []
}

const Catalog = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_MOVIES_SUCCESS:
      return { ...state, movies: action.movies }
    default:
      return state
  }
}

export default Catalog
