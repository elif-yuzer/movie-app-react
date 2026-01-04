import React from "react";
import { MovieContext } from "../context/MovieProvider";
import { useContext } from "react";
import MovieDetail from "../pages/MovieDetail";
import { useNavigate } from "react-router-dom";

const MovieCard = () => {
  const { film, imgUrl } = useContext(MovieContext);
  const navigate = useNavigate();

  console.log(film);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {film?.length > 0 ? (
        film.map((a) => (
          <div
            onClick={() => navigate(`/details/${a.id}`, { state: a })}
            key={a.id}
            className=" cursor-pointer group overflow-hidden"
          >
            <div className="card rounded-2xl bg-base-100 image-full w-full shadow-sm relative group overflow-hidden">
              <figure>
                <img
                  className=" object-cover"
                  src={`${imgUrl}${a.poster_path}`}
                  alt={a.title}
                />
              </figure>

              <div className="card-body flex justify-between items-center bg-amber-500 p-4">
                <h2 className="card-title">{a.title}</h2>

                <div
                  className="badge badge-primary badge-lg ms-auto border border-transparent rounded px-3 py-2
                  focus:outline-none
                  focus:ring-2 focus:ring-blue-500
                  focus:ring-offset-2 focus:ring-offset-white bg-blue-600 text-xl"
                >
                  {Number(a.vote_average ?? 0).toFixed(1)}
                </div>

                <div className="card-actions justify-end ">
                  <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 " />

                  <div
                    className="absolute inset-0 p-4 flex flex-col justify-end 
                    opacity-0 translate-y-8
                    transition-all duration-300
                    group-hover:opacity-100 group-hover:translate-y-0 z-10 overflow-y-auto max-h-[70%] "
                  >
                    <p className="text-gray-500 text-sm   bg-amber-50 rounded-l p-4 text-center rounded-2xl tracking-tightermix-blend-soft-light ">
                      {a.overview}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h2 className="text-white">Filmler aranıyor veya bulunamadı... 🎥</h2>
      )}
    </div>
    
  );
};
export default MovieCard;
