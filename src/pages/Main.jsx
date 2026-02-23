import React, { useRef } from "react";
import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
const Main = () => {
  const { films } = useContext(MovieContext);

  return (
    <div className="px-4 space-y-10 mt-4 ">
      <section>
        <h2 className="text-xl font-bold mb-4">Action</h2>
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4">
          {films.map(
            (film) =>
              film.genre_ids?.includes(28) && (
                <div
                  key={film.id}
                  className="card bg-base-100 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <figure>
                    <img
                      src={`https://image.tmdb.org/t/p/w1280${film.poster_path}`}
                      alt="Movie"
                      className="w-full h-auto"
                    />
                  </figure>
                </div>
              ),
          )}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-4">Adventure</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4">
          {films.map(
            (film) =>
              film.genre_ids?.includes(12) && (
                <div
                  key={film.id}
                  className="card bg-base-100 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <figure>
                    <img
                      src={`https://image.tmdb.org/t/p/w1280${film.poster_path}`}
                      alt="Movie"
                      className="w-full h-auto"
                    />
                  </figure>
                </div>
              ),
          )}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-4">Drama</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4">
          {films.map(
            (film) =>
              film.genre_ids?.includes(18) && (
                <div
                  key={film.id}
                  className="card bg-base-100 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <figure>
                    <img
                      src={`https://image.tmdb.org/t/p/w1280${film.poster_path}`}
                      alt="Movie"
                      className="w-full h-auto"
                    />
                  </figure>
                </div>
              ),
          )}
        </div>
      </section>
    </div>
  );
};

export default Main;
