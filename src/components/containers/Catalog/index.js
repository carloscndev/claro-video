// Import Modules
import { connect } from 'react-redux'

// Import Components
import CatalogPage from '../../pages/Catalog'

import {
  setMovies
} from '../../../redux/actions/Catalog'

const mapStateToProps = state => {
  return {
    catalog: state.Catalog
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setMovies: movies => {
      dispatch(setMovies(movies))
    }
  }
}

const CatalogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogPage)

export default CatalogContainer
