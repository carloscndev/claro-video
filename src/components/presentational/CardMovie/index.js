// Import Modules
import React from 'react'

// Import Styles
import './styles.scss'

const CardMovie = ({ movie }) => (
  <div className='card-movie'>
    <div className='title'>{movie.title_original}</div>
    <picture className='banner'>
      <img src={movie.image_large} alt={movie.title_original} />
    </picture>
  </div>

)

export default CardMovie
