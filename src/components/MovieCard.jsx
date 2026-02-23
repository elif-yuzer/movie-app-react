import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ filteredFilms }) => {
  const { imgUrl } = useContext(MovieContext);
  const navigate = useNavigate();

  return (
    <div className="px-4 py-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4">
        {filteredFilms.length > 0 ? (
          filteredFilms.map((film) => (
            <div
              key={film.id}
              onClick={() =>
                navigate(`/private/details/${film.id}`, { state: film })
              }
              className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow rounded-lg overflow-hidden h-full group cursor-pointer relative"
            >
              <figure className="relative overflow-hidden bg-gray-700 h-64">
                <img
                  src={`${imgUrl}${film.poster_path}`}
                  alt={film.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </figure>

              <div className="card-body p-3 flex flex-col justify-between">
                <div>
                  <h2 className="card-title text-sm line-clamp-2">
                    {film.title}
                  </h2>
                  <p className="text-xs opacity-70">
                    {film.release_date?.slice(0, 4)}
                  </p>
                </div>

                <div
                  className={`badge badge-sm ${
                    Number(film?.vote_average ?? 0) > 7
                      ? "bg-blue-600"
                      : "bg-red-600"
                  } text-white w-fit`}
                >
                  ⭐ {Number(film.vote_average ?? 0).toFixed(1)}
                </div>
              </div>

              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                <p className="text-white text-xs line-clamp-4">
                  {film.overview}
                </p>
              </div>
            </div>
          ))
        ) : (
          <h2 className="text-slate-500 text-center w-full col-span-full py-8">
            Bulunamadı... 🎥
          </h2>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
