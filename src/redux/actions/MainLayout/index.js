import * as ACTIONS_TYPES from './actionsTypes'

export const setLoading = isLoading => {
  return {
    type: ACTIONS_TYPES.SET_LOADING,
    isLoading
  }
}

export const setMenuMobile = isMenuMobileVisible => {
  return {
    type: ACTIONS_TYPES.SET_MENU_MOBILE,
    isMenuMobileVisible
  }
}
