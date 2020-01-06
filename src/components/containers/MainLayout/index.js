// Import Modules
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Import Components
import MainLayout from '../../layouts/MainLayout'

import {
  setLoading,
  setMenuMobile,
  getUrlSuccess,
  getUrl,
  setInputMovile
} from '../../../redux/actions/MainLayout'
import { filterMovies } from '../../../redux/actions/Catalog'

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
    getUrl,
    filterMovies,
    setInputMovile
  }, dispatch)
})

const MainLayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayout)

export default MainLayoutContainer
