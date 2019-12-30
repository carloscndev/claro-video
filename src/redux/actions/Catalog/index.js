import fetch from 'isomorphic-fetch'

import * as ACTIONS_TYPES from './actionsTypes'
import { DOMAIN } from '../../../constants/Api'

export const getMoviesSuccess = movies => {
  return {
    type: ACTIONS_TYPES.GET_MOVIES_SUCCESS,
    movies
  }
}

export const getMovies = (url) => {
  return dispatch => {
    const urlMovies = `${DOMAIN}${url}api_version=v5.86&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=9s5hqq76r3g6sg4jb90l38us52`
    return fetch(urlMovies)
      .then(response => response.json())
      .then(data => dispatch(getMoviesSuccess(data.response.groups)))
      .catch(err => console.log(err))
  }
}
