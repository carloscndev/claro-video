// Import Modules
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Import Components
import CatalogPage from '../../pages/Catalog'

import {
  getMoviesSuccess,
  getMovies
} from '../../../redux/actions/Catalog'

const mapStateToProps = state => {
  return {
    catalog: state.Catalog,
    url: state.MainLayout.url
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    getMoviesSuccess,
    getMovies
  }, dispatch)
})

const CatalogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogPage)

export default CatalogContainer
