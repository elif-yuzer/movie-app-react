import React, { useContext, useEffect, useMemo, useState } from "react";
import { MovieContext } from "../context/MovieProvider";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const MovieDetail = () => {
  const { imgUrl, api_key ,addWatch} = useContext(MovieContext);

  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();

  const [videoKey, setVideoKey] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const videoUrl =
    (() => {
      if (!id || !api_key) return "";

      return `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}`;
    },
    [id, api_key]);

  const getVideo = async () => {
    try {
      if (!videoUrl) return;

      const res = await axios.get(videoUrl);
      const results = res?.data?.results ?? [];

      if (results.length === 0) {
        setVideoKey("");
        return;
      }

      const teaser = results.find((v) => v.type === "Teaser");
      const chosen = teaser || trailer || results[0];

      setVideoKey(chosen?.key || "");
    } catch (error) {
      alert("Video bulunamadı.");
      setVideoKey("");
    }
  };

  useEffect(() => {
    getVideo();
  }, [videoUrl]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

   const handleaddWatchList =(e,state)=>{
    console.log("WATCHLIST CLICK", state.id);
   e.stopPropagation()
   addWatch(state)
   

  }

  return (
    <div className="bg-base-100 shadow-sm rounded-xl overflow-hidden max-w-3xl mx-auto flex flex-col md:flex-row">
      <figure className="md:w-[35%] w-full">
        <img
          className="w-full h-full object-cover"
          src={`${imgUrl}${state?.poster_path || ""}`}
          alt={state?.title || "Movie poster"}
        />
      </figure>

      <div className="p-5 flex-1 flex flex-col gap-3">
        <h2 className="text-xl font-semibold">{state?.title}</h2>
        <p className="text-sm opacity-80 ">{state?.overview}</p>
        <p className="text-gray-500 text-sm   rounded-l p-4 text-center rounded-2xl tracking-tightermix-blend-soft-light ">
          Release {state?.release_date}
        </p>

        <div className="mt-auto flex flex-col gap-2 justify-end">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-ghost cursor-pointer hover:text-blue-400"
          >
            Geri Dön
          </button>

          <button
            onClick={openModal}
            className="btn btn-primary hover:text-blue-400 border-0 cursor-pointer"
            disabled={!videoKey}
            title={!videoKey ? "Fragman bulunamadı" : "Fragmanı izle"}
          >
            Watch fragman
          </button>
          <div className="flex justify-center ">
            <button
              type="button"
              onClick={(e) => handleaddWatchList(e, state)}
              className="inline-flex items-center justify-center gap-2 px-6 py-2 border-2 rounded-2xl cursor-pointer hover:text-blue-400"
            >
              <span className=" inline-block text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </span>
              Watchlist
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center p-4"
          onClick={closeModal}
        >
          <div className="relative w-full max-w-4xl aspect-video">
            {videoKey ? (
              <iframe
                className="w-full h-full rounded-xl"
                src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&rel=0`}
                title="Trailer"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full rounded-xl bg-black flex items-center justify-center text-white">
                Video yok veya yüklenemedi
              </div>
            )}

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 rounded-xl bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700 active:scale-[0.98]"
            >
              Kapat
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
