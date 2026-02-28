import React, { useRef } from "react";
import { lang } from "../utils/constant";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GptsearchBar = () => {
  const langkey = useSelector((store) => store.lang.text);
  const inputValue = useRef();
  const handleGpt = async () => {
   try { const inputText=inputValue.current.value
     const gptQuery="Act as a web series recommendation system and suggest some web series for the query only give me name of 5 web series. comma seprated like the example result given ahead. example result: game of thronse,dark,stranger things,scam,panchayat "
    const response = await openai.responses.create({
  model: 'gpt-5.2',
  instructions: gptQuery,
  input: inputText,
});
   }
    catch(error){
      alert("The API key has expired. ❌ ")
    }
  };
  return (
    <>
      <div className="pt-60 sm:pt-32 md:pt-40 lg:pt-48 px-4">
  <form
    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
    onSubmit={(e) => e.preventDefault()}
  >
    <input
      ref={inputValue}
      className="w-full sm:w-2/3 md:w-1/2 lg:w-[30%] 
                 px-4 sm:px-6 
                 h-12 
                 border border-gray-400 
                 rounded-lg 
                 capitalize"
      type="text"
      placeholder={lang[langkey].text}
    />

    <button
      onClick={handleGpt}
      className="w-full sm:w-32 
                 h-12 
                 border border-gray-400 
                 rounded-lg 
                 bg-black 
                 text-white 
                 capitalize"
      type="button"
    >
      {lang[langkey].search}
    </button>
  </form>
</div>
    </>
  );
};

export default GptsearchBar;
