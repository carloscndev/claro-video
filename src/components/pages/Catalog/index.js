// Import Modules
import React, { useEffect } from 'react'

// Import Components
import MoviesLayout from '../../presentational/MoviesLayout'
import CardMovie from '../../presentational/CardMovie'

const CatalogPage = ({
  catalog,
  url,
  getMovies
}) => {
  useEffect(() => {
    if (url) {
      getMovies(url)
    }
  }, [getMovies, url])
  return (
    <div className='main-catalog'>
      <MoviesLayout>
        {
          catalog.visibleMovies && catalog.visibleMovies.map(movie =>
            <CardMovie key={movie.id} movie={movie} />
          )
        }
      </MoviesLayout>
    </div>
  )
}

export default CatalogPage
