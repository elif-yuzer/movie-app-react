import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import AuthContext from "./AuthContext";
import axios from "axios";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../auth/firebase";
export const MovieContext = createContext();
import { toastSuccess } from "../helpers/ToastNotify";
const MovieProvider = ({ children }) => {
   
  const { currentUser } = useContext(AuthContext);
  const api_key = import.meta.env.VITE_TMDB_KEY;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`;
 /*  console.log(api_key); */
  const imgUrl = "https://image.tmdb.org/t/p/w1280";


  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [myMovies, setMyMovies] = useState([]);

  const getFilmData = async (url) => {
    setLoading(true)
    try{
      const response=await axios.get(url)
      /* console.log(response); */
      const {data:{results}}=response
      setFilms(results)
      setLoading(false)
      

    } catch(error){
      console.log(error);
    }

  }

  useEffect(() => {
    getFilmData(url);
  }, [currentUser]);

  const sortWithPopularity = () => {
    const sortedFilms = [...films].sort((a, b) => b.vote_count - a.vote_count);
    setFilms(sortedFilms);
  };

  const sortWithReleaseDate = () => {
    const sortedFilms = [...films].sort(
      (a, b) => new Date(b.release_date) - new Date(a.release_date),
    );
    setFilms(sortedFilms);
  };

  const sortWithIMDB = () => {
    const sortedFilms = [...films].sort((a, b) => b.vote_average - a.vote_average);
    setFilms(sortedFilms);
  };

   const addWatch = async (movie) => {
    console.log("addWatch called", { movieId: movie?.id, currentUser: !!currentUser });
    if (!currentUser?.uid) {
      console.log("currentUser yok, addWatch çalışmadı");
      return;
    }
   
    try {
      const movieRef = doc(
        db,
        "users",
        currentUser?.uid,
        "watchlist",
        movie.id.toString(),
      );

      const veriler = {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        poster_path: movie.poster_path ?? null,
        poster_url: movie.poster_path ? `${imgUrl}${movie.poster_path}` : null,
        vote_average: movie.vote_average,
        release_date: movie.release_date,
        original_language: movie.original_language,
      };

      await setDoc(movieRef, veriler);
    } catch (error) {
      console.log("Firestore hata:", error.code, error.message);
    }
    toastSuccess("watchlist'e eklendi");
  };
   const handleGetfromFireBase = () => {
    if (!currentUser?.uid) {
      return;
    }

    const path = collection(db, "users", currentUser.uid, "watchlist");

    return onSnapshot(path, (querySnapShot) => {
      const yenilist = querySnapShot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));
      setMyMovies(yenilist);
    });
  };

  useEffect(() => {
    if (!currentUser?.uid) {
      setMyMovies([]);
      return;
    }

    const unsubscribe = handleGetfromFireBase();

    return unsubscribe;
  }, [currentUser?.uid]);

  

  return (
    <MovieContext.Provider
      value={{
        films,
        setFilms,
        loading,
        imgUrl,
        myMovies,
        sortWithPopularity,
        sortWithReleaseDate,
        sortWithIMDB,
        addWatch,
        setMyMovies
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
