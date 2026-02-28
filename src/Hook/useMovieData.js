import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovieData } from "../utils/movieSlice";
const useMovieData = () => {
  const dispatch = useDispatch();
  const selectMovieData=useSelector(store=>store.movie.playMovie)
  const handleData = async () => {
    try {
      const rData = await fetch("/movieData.json");
      const json= await rData.json()
      dispatch(
        addMovieData(json)
      )  
    } catch (error) {
      console.log("something error from json Data", error);
    }
  };
  useEffect(() => {
    !selectMovieData && handleData()
  }, []);
};

export default useMovieData;