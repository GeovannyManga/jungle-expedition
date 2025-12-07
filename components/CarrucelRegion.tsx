'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  { title: 'Cañaveral', img: '/cañaveral.jpg' },
  { title: 'Arrecife', img: '/arrecife.webp' },
  { title: 'Piscina natural', img: '/piscina.jpg' },
  { title: 'Cabo San Juan', img: '/cabo.jpg' },
  { title: 'Sendero final', img: '/nudista.jpeg' },
];

export default function AutoBanner() {
  const [index, setIndex] = useState(0);

  // Cambio automático
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.img}
            alt={slide.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority={i === index}
          />

          {/* Capa oscura sutil */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Texto centrado */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold drop-shadow-xl">
              {slide.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
