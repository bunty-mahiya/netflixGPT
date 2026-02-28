import React from 'react'

const MovieCard = ({item}) => {
    const {poster}=item
  return (
   <div className="flex-shrink-0 
                w-32 sm:w-40 md:w-48 
                aspect-[2/3] 
                rounded-lg 
                overflow-hidden 
                transition-transform 
                duration-300 
                hover:scale-105">

  <img
    className="w-full h-full object-cover"
    src={poster}
    alt="series poster"
    loading="lazy"
  />
</div>
  )
}

export default MovieCard