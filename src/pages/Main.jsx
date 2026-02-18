import React, { useEffect } from "react";
import MovieCard from "../companents/MovieCard";
import { MovieContext } from "../context/MovieProvider";
import { useContext } from "react";

const Main = () => {
  const { setEnteredFilm, handleSubmit, enteredFilm, getData, url } =
    useContext(MovieContext);

  useEffect(() => {
    getData(url);
  }, []);

 

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col gap-3 ">
      <div className="flex justify-center items-center">
        <div className=" flex flex-row justify-center py-4">
          <div className="flex  gap-2">
            <form
              className="flex-row justify-center flex gap-2"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Search a movie..."
                className="  w-full rounded-xl border text-lime-50 border-gray-200 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                autoFocus
                onChange={(e) => setEnteredFilm(e.target.value)}
                value={enteredFilm}
              />
              <button type="submit" className="rounded-xl bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700 active:scale-[0.98]">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <MovieCard />
    </div>
  );
};

export default Main;
