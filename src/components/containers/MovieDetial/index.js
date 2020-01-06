// Import Modules
import { connect } from 'react-redux'

// Import Components
import MovieDatailPage from '../../pages/MovieDetail'

const mapStateToProps = state => {
  return {}
}

const MovieDetailContainer = connect(
  mapStateToProps
)(MovieDatailPage)

export default MovieDetailContainer
