// Import Modules
import { connect } from 'react-redux'

// Import Components
import MainLayout from '../../layouts/MainLayout'

import {
  setLoading
} from '../../../redux/actions/MainLayout'

export const mapStateToProps = state => {
  console.log(state)
  return {
    MainLayout: state.mainLayout
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setLoading: isLoading => {
      dispatch(setLoading(isLoading))
    }
  }
}

const MainLayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayout)

export default MainLayoutContainer
