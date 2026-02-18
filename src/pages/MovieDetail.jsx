import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../context/MovieProvider";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toastError } from "../helpers/ToastNotify";

const MovieDetail = () => {
  const { imgUrl, addWatch } = useContext(MovieContext);

  const [detay, setDetay] = useState({});
  const [videoKey, setVideoKey] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();


  const API_KEY = import.meta.env.VITE_TMDB_KEY;

  const videoUrl = () => {
    if (!id || !API_KEY) return "";
    return `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
  };

  const getVideo = async () => {
    const u = videoUrl();
    if (!u) return;

    try {
      const res = await axios.get(u);
      const results = res?.data?.results ?? [];

      if (results.length === 0) {
        setVideoKey("");
        return;
      }

      const teaser = results.find((v) => v.type === "Teaser");
      const chosen = teaser || results[0];

      setVideoKey(chosen?.key || "");
    } catch (error) {
      toastError("Not found");
      setVideoKey("");
    }
  };

  useEffect(() => {
    if (!id || !API_KEY) return;

    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((res) => setDetay(res.data))
      .catch(() => toastError("Detail not found"));
  }, [id, API_KEY]);


  useEffect(() => {
    getVideo();
  }, [id, API_KEY]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleaddWatchList = (e, movie) => {
    e.stopPropagation();
    if (!movie?.id) return;
    addWatch(movie);
  };

  return (
    <div className="bg-base-100 shadow-sm rounded-xl overflow-hidden max-w-3xl mx-auto flex flex-col md:flex-row">
      <figure className="md:w-[35%] w-full">
        <img
          className="w-full h-full object-cover"
          src={`${imgUrl}${detay?.poster_path || ""}`}
          alt={detay?.title || "Movie poster"}
        />
      </figure>

      <div className="p-5 flex-1 flex flex-col gap-3">
        <h2 className="text-xl font-semibold">{detay?.title}</h2>
        <p className="text-sm opacity-80 ">{detay?.overview}</p>
        <p className="text-gray-500 text-sm rounded-l p-4 text-center rounded-2xl tracking-tighter mix-blend-soft-light">
          Release {detay?.release_date}
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
              onClick={(e) => handleaddWatchList(e, detay)}
              className="inline-flex items-center justify-center gap-2 px-6 py-2 border-2 rounded-2xl cursor-pointer hover:text-blue-400"
            >
              <span className="inline-block text-center">
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
              className="absolute top-4 cursor-pointer right-4 rounded-xl bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700 active:scale-[0.98]"
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
