import * as ACTIONS_TYPES from './actionsTypes'

export const setLoading = isLoading => {
  return {
    type: ACTIONS_TYPES.SET_LOADING,
    isLoading
  }
}
