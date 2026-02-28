import React from 'react'

const VideoTitle = ({title,description}) => {
  return (
   <div className="absolute 
                inset-0 
                z-10
                mt-40 md:mt-0
                aspect-video
                flex 
                items-center 
                bg-gradient-to-r from-black 
                text-white">

  <div className="px-4 sm:px-8 md:px-16 
                  max-w-xl 
                  ">

    <h1 className="font-bold 
                   text-lg sm:text-3xl md:text-4xl 
                   capitalize">
      {title}
    </h1>

    <h2 className="text-sm sm:text-base md:text-lg 
                   capitalize 
                   leading-relaxed">
      {description}
    </h2>

    <div className="flex 
                    flex-col sm:flex-row 
                    gap-2 
                    pt-4">

      <button className="text-base sm:text-lg 
                         border border-gray-100 
                          py-2 
                          px-4
                         rounded 
                         hover:bg-gray-50 
                         hover:text-black 
                         capitalize">
        ◀ Play Now
      </button>

      <button className="px-4 py-2 
                         text-base sm:text-lg 
                         rounded 
                         bg-gray-200/40 
                         text-white 
                         capitalize">
        More Info
      </button>

    </div>
  </div>
</div>
  )
}

export default VideoTitle