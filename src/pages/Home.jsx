import React, { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

const Home = () => {
 
  const { films,getFilmData,api_key,url } = useContext(MovieContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      getFilmData(url); // boşsa listeyi sıfırla
      return;
    }
    getFilmData(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchTerm}`,
    );
  };

  return (
    <div className="px-4 py-8">
      <div className="mb-8 flex  gap-2 justify-center shadow-sm bg-base-100 rounded-lg p-4">
       <form onSubmit={handleSearch}
       className="flex gap-2"
       > <input
          type="text"
          placeholder="Search a movie..."
          className="input input-bordered "
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="btn btn-outline rounded-xl">Search</button>
        </form>
      </div>
      <MovieCard />
    </div>
  );
};

export default Home;
