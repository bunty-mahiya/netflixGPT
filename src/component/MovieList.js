import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard';
const MovieList = () => {
 const movie=useSelector((movie)=>movie.movie?.playMovie)
  if(!movie)return;
  const {newReleases,topRated,trending}=movie?.sections
  return (
   <div className="relative z-10 
                -mt-1     
                px-4 sm:px-8 md:px-12  sm:-mt-0 md:-mt-40
                space-y-10">

  {[newReleases, topRated, trending].map((section) => (
    <div key={section.title}>

      <p className="text-lg sm:text-xl md:text-2xl 
                    font-semibold 
                    py-4 sm:py-6">
        {section.title}
      </p>

      <div className="overflow-x-auto 
                      scroll-smooth 
                      no-scrollbar">

        <div className="flex 
                        gap-4 sm:gap-5 md:gap-6 
                        min-w-max">

          {section.results.map((item) => (
            <MovieCard key={item.id} item={item} />
          ))}

        </div>
      </div>

    </div>
  ))}

</div>
  )
}

export default MovieList