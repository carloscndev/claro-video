import * as ACTIONS_TYPES from '../actions/MainLayout/actionsTypes'

export const initialState = {
  isLoading: false,
  isMenuMobileVisible: false
}

const MainLayout = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.SET_LOADING:
      return { ...state, isLoading: action.isLoading }
    case ACTIONS_TYPES.SET_MENU_MOBILE:
      return { ...state, isMenuMobileVisible: action.isMenuMobileVisible }
    default:
      return state
  }
}

export default MainLayout
