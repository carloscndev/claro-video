import { combineReducers } from 'redux'

import MainLayout from './mainLayoutReducer'
import Catalog from './catalogReducer'

const rootReducer = combineReducers({
  MainLayout,
  Catalog
})

export default rootReducer
