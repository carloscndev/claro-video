import fetch from 'isomorphic-fetch'

import * as ACTIONS_TYPES from './actionsTypes'
import { DOMAIN } from '../../../constants/Api'

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

export const getUrlSuccess = url => {
  return {
    type: ACTIONS_TYPES.GET_URL_SUCCESS,
    url
  }
}

export const getUrl = () => {
  return dispatch => {
    const url = `${DOMAIN}services/cms/level?api_version=v5.86&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=9s5qq76r3g6sg4jb90l38us52&isCacheable=true&node=gen_accion&domain=https%3A%2F%2Fmfwkweb-api.clarovideo.net%2F&origin=https3A%2F%2Fwww.clarovideo.com%2F&user_id=22822863`
    return fetch(url)
      .then(response => response.json())
      .then(data => dispatch(getUrlSuccess(data.response.modules.module[0].components.component[2].properties.url)))
      .catch(err => console.log(err))
  }
}
