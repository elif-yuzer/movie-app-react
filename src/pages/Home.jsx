import React, { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const navigate = useNavigate();
  const { films } = useContext(MovieContext);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredFilms = films.filter((film) =>
    film.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="px-4 py-8">
      <div className="mb-8 flex gap-2 justify-center shadow-sm bg-base-100 rounded-lg p-4">
        <input
          type="text"
          placeholder="Search a movie..."
          className="input input-bordered "
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-outline">Search</button>
      </div>
      <MovieCard filteredFilms={filteredFilms} />
    </div>
  );
};

export default Home;
