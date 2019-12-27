import * as ACTIONS_TYPES from '../../actions/MainLayout/actionsTypes'

export const initialState = {
  isLoading: true
}

const MainLayout = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.SET_LOADING:
      var newState = { ...state, isLoading: action.isLoading }
      break
    default:
      return state
  }
  return newState
}

export default MainLayout
