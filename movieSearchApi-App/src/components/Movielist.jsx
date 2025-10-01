import React from 'react'
import MovieCard from './MovieCard'


const Movielist = ({ loading, movie }) => {
  if (!loading && movie.length === 0) return <h1 className='text-3xl font-semibold text-center text-red-400'>No Movie Found</h1>

  return (
    <>
      <div className='max-w-[80vw] mx-auto grid grid-cols-1 md:grid-col-2 lg:grid-cols-4 gap-4'>
      {
        movie.map((item)=> {
          return (
            <MovieCard key={item.imdbID} movie={item}/>
          )
        })
      }
      </div>
    </>
  )
}

export default Movielist