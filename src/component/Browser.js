import React from "react";
import Headers from "./Header";
import useMovieData from "../Hook/useMovieData";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";
import GPTsearch from "./GPTsearch";
import { useSelector } from "react-redux";

const Browser = () => {
  const GTPToggleBtn = useSelector((state) => state.GTP?.ToggleBtn);
  useMovieData();
  return (
    <>
      <Headers />
      {GTPToggleBtn ? (
        <GPTsearch />
      ) : (
        <>
          <MainContainer />
          <SecondryContainer />
        </>
      )}
    </>
  );
};

export default Browser;
