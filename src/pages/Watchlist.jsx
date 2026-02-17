import React, { useState } from 'react'
import { MovieContext } from '../context/MovieProvider'
import { useContext } from 'react'

const Watchlist = () => {

    const {myMovies}=useContext(MovieContext)
  
   /*  console.log(myMovies); */
   
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
    
      {myMovies?.length > 0 ? (
        myMovies.map((a) => (
          <div
            key={a.id}
            className=" cursor-pointer group overflow-hidden"
          >
            <div className="card rounded-2xl bg-base-100 image-full mb-4  mx-auto   w-[85%] shadow-sm relative group overflow-hidden">
              <figure>
                <img
                  className=" object-cover"
                  src={a.poster_url}
                  alt={a.title}
                />
              </figure>

              <div className="card-body flex justify-between gap-2 flex-col items-center bg-amber-500 p-4">
                <div>
                  <h2 className="card-title">{a.title}</h2>
                </div>
              

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
  )
}

export default Watchlist