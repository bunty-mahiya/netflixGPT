
import { useSelector } from 'react-redux'
import AutoPlayVideo from './AutoPlayVideo';
import VideoTitle from './VideoTitle';
const MainContainer = () => {
  const movieData=useSelector((state)=> state.movie?.playMovie)
  if(movieData == null) return;
  const {description,title}=movieData.sections.newReleases.results[0]
  return (
    <div className='md:pt-0 pt-40 bg-black'>
    <VideoTitle description={description} title={title}/>
    <AutoPlayVideo/>
    </div>
  )
}

export default MainContainer