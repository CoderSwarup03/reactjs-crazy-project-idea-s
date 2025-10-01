import React from 'react'

const MovieCard = ({ movie }) => {
    return (
        <>
            <div className='flex flex-col gap-2 bg-white overflow-hidden rounded-md w-[35vw] h-[30vh]'>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400x600'}
                    alt={movie.title}
                    className='w-full h-[80%] object-cover'
                />
                <div className='flex justify-between items-center p-2'>
                    <span className='font-semibold text-lg'>{movie.Title}</span>
                    <span className='font-semibold text-lg'>{movie.Year}</span>
                </div>
            </div>
        </>
    )
}

export default MovieCard