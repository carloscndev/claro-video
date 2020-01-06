// Import Modules
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Import Styles
import './styles.scss'

const MovieDetail = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  useEffect(() => {
    let movies = window.localStorage.getItem('movies') ? JSON.parse(window.localStorage.getItem('movies')) : {}
    let movie = movies.filter(movie => movie.id === id)
    setMovie(movie[0])
  }, [id])

  return (
    <div className='movie-detail'>
      {
        movie.id && (
          <>
            <div className='image-container'>
              <img src={movie.image_large} alt={movie.title_original} />
            </div>
            <div className='movie-info'>
              <div className='title'>{movie.title_original}</div>
              <div className='description'>{movie.description_large}</div>
              <div className='legal'>
                <span>{movie.year}</span>
                <span>{movie.rating_code}</span>
                {movie.proveedor_name && <span>{movie.proveedor_name}</span>}
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}

export default MovieDetail
