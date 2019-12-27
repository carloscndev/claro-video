import * as ACTIONS_TYPES from './actionsTypes'

export const setMovies = movies => {
  return {
    type: ACTIONS_TYPES.SET_MOVIES,
    movies
  }
}
