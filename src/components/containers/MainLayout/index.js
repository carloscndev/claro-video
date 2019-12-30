// Import Modules
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Import Components
import MainLayout from '../../layouts/MainLayout'

import {
  setLoading,
  setMenuMobile,
  getUrlSuccess,
  getUrl
} from '../../../redux/actions/MainLayout'

export const mapStateToProps = state => {
  return {
    mainLayout: state.MainLayout
  }
}

export const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    setLoading,
    setMenuMobile,
    getUrlSuccess,
    getUrl
  }, dispatch)
})

const MainLayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayout)

export default MainLayoutContainer
