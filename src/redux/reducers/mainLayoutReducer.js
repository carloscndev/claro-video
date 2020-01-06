import * as ACTIONS_TYPES from '../actions/MainLayout/actionsTypes'

export const initialState = {
  isLoading: true,
  isMenuMobileVisible: false,
  url: '',
  isInputMovileVisible: false
}

const MainLayout = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.SET_LOADING:
      return { ...state, isLoading: action.isLoading }
    case ACTIONS_TYPES.SET_MENU_MOBILE:
      return { ...state, isMenuMobileVisible: action.isMenuMobileVisible }
    case ACTIONS_TYPES.GET_URL_SUCCESS:
      return { ...state, url: action.url }
    case ACTIONS_TYPES.SET_INPUT_MOVILE:
      return { ...state, isInputMovileVisible: action.isInputMovileVisible }
    default:
      return state
  }
}

export default MainLayout
