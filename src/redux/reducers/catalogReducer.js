import * as ACTION_TYPES from '../actions/Catalog/actionsTypes'

export const initialState = {
  movies: [],
  visibleMovies: []
}

const Catalog = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_MOVIES_SUCCESS:
      return { ...state, movies: action.movies, visibleMovies: action.movies }
    case ACTION_TYPES.FILTER_MOVIES:
      let newVisbleMovies = state.movies
      if (action.input) {
        newVisbleMovies = state.visibleMovies.filter(movie => (movie.title_original.toLowerCase()).includes(action.input))
      } else {
        newVisbleMovies = state.movies
      }
      return { ...state, visibleMovies: newVisbleMovies }
    default:
      return state
  }
}

export default Catalog
