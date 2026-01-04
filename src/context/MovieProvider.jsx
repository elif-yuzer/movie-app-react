import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const MovieContext = createContext();



const MovieProvider = ({ children }) => {
  const api_key = import.meta.env.VITE_TMDB_KEY;
  const imgUrl = "https://image.tmdb.org/t/p/w1280";

  /*  console.log(imgUrl); */

  const [film, setFilm] = useState([]);
  const [enteredFilm, setEnteredFilm] = useState("");
 
  /* console.log(enteredFilm); */

  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`;
  /* console.log(url) */ 
  const getData = async (url) => {
  const res = await axios.get(url);

    const { page, results } = res.data;
    /* console.log(page);
    console.log(results); */
    setFilm(results);
  };
  useEffect(() => {
    getData(url);
  }, [setFilm]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!enteredFilm) {
      getData(url);
      alert("Lutfen bır film gir");
    } else {
      const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${enteredFilm}`;
      getData(searchUrl);
      setEnteredFilm("");
    }
  };

  return (
    <MovieContext.Provider
      value={{
        film,
        setFilm,
        getData,
        imgUrl,
        enteredFilm,
        setEnteredFilm,
        handleSubmit,
        api_key,
        imgUrl,
        url
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
