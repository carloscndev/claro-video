// Import Modules
import React from 'react'

// Import Styles
import './styles.scss'

const CardMovie = ({ movie }) => (
  <a href={`/movie/${movie.id}`}>
    <div className='card-movie'>
      <div className='image-card-container'>
        <picture className='banner'>
          <source media='(max-width: 768px)' srcSet={movie.image_medium} />
          <img src={movie.image_large} alt={movie.title_original} />
        </picture>
      </div>
    </div>
  </a>
)

export default CardMovie
