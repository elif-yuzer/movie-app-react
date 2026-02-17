import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../auth/Firebase";
import { AuthContext } from "./AuthProvider";
import { toastSuccess } from "../helpers/ToastNotify";

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  const api_key = import.meta.env.VITE_TMDB_KEY;
  const imgUrl = "https://image.tmdb.org/t/p/w1280";

  /*  console.log(imgUrl); */

  const [film, setFilm] = useState([]);
  const [enteredFilm, setEnteredFilm] = useState("");
  const [myMovies, setMyMovies] = useState([]);
  const [sortIMDB,setSortIMDB]=useState([])
  const [sortRelease,setSortRelease]=useState([])
  /* console.log(enteredFilm); */

  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`;
  /* console.log(url) */
  const getData = async (url) => {
    const res = await axios.get(url);

    const { page, results } = res.data;
    console.log(page);
    console.log(results);
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

  const addWatch = async (movie) => {
    if (!currentUser?.uid) {
      console.log("currentUser yok, addWatch çalışmadı");
      return;
    }
    try {
      console.log("✅ addWatch çağrıldı:", movie?.id);
      console.log("✅ currentUser:", currentUser);

      const movieRef = doc(
        db,
        "users",
        currentUser?.uid,
        "watchlist",
        movie.id.toString(),
      );

      console.log("Fonksiyon başladı");
      console.log("Kullanıcı:", currentUser.uid);

      const veriler = {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        poster_path: movie.poster_path ?? null,
        poster_url: movie.poster_path ? `${imgUrl}${movie.poster_path}` : null,
        vote_average: movie.vote_average,
        " release_date": movie.release_date,
        original_language: movie.original_language,
      };

      await setDoc(movieRef, veriler);

      console.log(
        "📌 Yazılacak path:",
        `users/${currentUser.uid}/watchlist/${movie.id}`,
      );
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

const sortMovies=()=>{
  const sortMovie=film.sort((b,a)=> a.vote_average - b.vote_average)
    
  
  setSortIMDB(sortMovie)
}

const  handleSortRelease=()=>{
  const sortRelease=film.sort((a,b)=>new Date(b.release_date) - new Date(a.release_date))
  setSortRelease(sortRelease)

}

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
        url,
        addWatch,
        setMyMovies,
        myMovies,
        addWatch,
        sortMovies,
        sortIMDB,
        handleSortRelease
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
