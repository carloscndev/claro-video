import * as ACTIONS_TYPES from '../actions/MainLayout/actionsTypes'

export const initialState = {
  isLoading: false,
  isMenuMobileVisible: false
}

const MainLayout = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.SET_LOADING:
      var newState = { ...state, isLoading: action.isLoading }
      break
    case ACTIONS_TYPES.SET_MENU_MOBILE:
      var newState = { ...state, isMenuMobileVisible: action.isMenuMobileVisible }
      break
    default:
      return state
  }
  return newState
}

export default MainLayout
