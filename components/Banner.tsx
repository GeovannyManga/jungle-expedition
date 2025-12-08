'use client';

import { useState } from 'react';
import { Satisfy } from "next/font/google";


const satisfy = Satisfy({
  weight: '400',
   subsets: ['latin'],
})

export default function Banner() {
  const [loading, setLoading] = useState(true);
  
  return (
    <div className="relative w-full h-[100vh] overflow-hidden bg-black">
      {/* Loader mientras se carga el video */}
      {loading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Video de fondo de YouTube */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <iframe
          className="absolute top-1/2 left-1/2 w-[450vw] lg:w-full h-[350vh] -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/FukNJojN2PI?autoplay=1&mute=1&controls=0&loop=1&playlist=FukNJojN2PI&modestbranding=1&playsinline=1&rel=0&disablekb=1"
          title="Video de fondo"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
           loading="lazy"
          onLoad={() => setLoading(false)} // Oculta loader al cargar
        ></iframe>
      </div>

      {/* Capa de oscurecimiento suave */}
      <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none" />

      {/* Texto encima del video */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4 pointer-events-none">
        <h6 className="text-white text-3xl sm:text-4xl lg:text-7xl font-bold">
          <b className='mb-30 text-white/80 '>Jungle Expedition</b>
          <p className={`${satisfy.className} text-emerald-100`}>Ecological Tourism</p>
        </h6>
      </div>
    </div>
  );
}
