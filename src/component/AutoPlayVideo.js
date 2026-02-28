import React from 'react'

const AutoPlayVideo = () => {
  return (
    <div className="w-full md:mt-0">
  <div className="relative w-full aspect-video">
    <iframe
      className="absolute inset-0 w-full aspect-video rounded-lg"
      src="https://www.youtube.com/embed/ULCIHP5dc44?autoplay=1&mute=1&loop=1&playlist=ULCIHP5dc44&controls=1&modestbranding=1"
      title="YouTube video player"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>
  )
}

export default AutoPlayVideo