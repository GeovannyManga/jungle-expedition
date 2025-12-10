'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';

const cards = [
  {
    title: 'Tours en la naturaleza',
    img: 'https://res.cloudinary.com/drpyfh8bw/image/upload/v1764543880/samples/Tubooking/WhatsApp_Image_2025-11-30_at_17.45.06_1_axoocx.jpg',
    link: 'https://wa.me/573114174520?text=Hola,%20me%20interesan%20los%20tours%20en%20la%20naturaleza'
  },
  {
    title: 'Tours culturales e históricos',
    img: 'https://res.cloudinary.com/drpyfh8bw/image/upload/v1764543881/samples/Tubooking/WhatsApp_Image_2025-11-30_at_17.45.06_enfxaz.jpg',
    link: 'https://wa.me/573114174520?text=Hola,%20quiero%20info%20sobre%20tours%20culturales%20e%20históricos'
  },
  {
    title: 'Experiencias acuáticas',
    img: 'https://res.cloudinary.com/drpyfh8bw/image/upload/v1764543880/samples/Tubooking/WhatsApp_Image_2025-11-30_at_17.45.03_hedaat.jpg',
    link: 'https://wa.me/573114174520?text=Hola,%20quiero%20info%20sobre%20experiencias%20acuáticas'
  },
];

export default function CardRegion() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollX = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.children[0].clientWidth + 16;
    const index = Math.round(scrollX / cardWidth);
    setActiveIndex(index);
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0].clientWidth + 16;
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
  };

  return (
    <section
      id='region'
      className="w-full bg-gradient-to-b from-[#fdfbf7] to-[#e3e0d5] py-16 px-4 overflow-hidden flex flex-col items-center"
    >
      <h2 className="text-3xl font-extrabold mb-10 text-center text-[#3d3325] tracking-tight">
        Explora por Categorías
      </h2>

      {/* 🪵 Desktop estilo rústico */}
      <div className="hidden lg:grid grid-cols-3 gap-10 w-full max-w-5xl">
        {cards.map((card, index) => (
          <a
            key={index}
            target="_blank"
            href={card.link}
            className="group cursor-pointer"
          >
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-[#ece7d9] shadow-[0_4px_12px_rgba(0,0,0,0.15)] border border-[#d8d2c4] relative">
              <Image
                src={card.img}
                alt={card.title}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
              />
            </div>
            <p className="text-center mt-4 text-xl font-semibold text-[#3d3325]">
              {card.title}
            </p>
          </a>
        ))}
      </div>

      {/* 🐾 Mobile estilo más natural */}
      <div className="w-full lg:hidden mt-4">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto px-2 scroll-smooth snap-x snap-mandatory pb-4 scrollbar-none"
        >
          {cards.map((card, index) => (
            <a
              key={index}
              target="_blank"
              href={card.link}
              className="flex-shrink-0 snap-center w-[160px] aspect-[3/4] rounded-xl overflow-hidden bg-[#ece7d9] border border-[#d6cfbf] shadow-md relative hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={card.img}
                alt={card.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#fff8]/90 text-center py-1 border-t border-[#d6cfbf]">
                <p className="text-sm font-bold text-[#3d3325]">{card.title}</p>
              </div>
            </a>
          ))}
        </div>

        {/* 🔘 Puntos estilo piedra */}
        <div className="flex justify-center mt-5 gap-3">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex
                  ? 'bg-[#6b5a43]'
                  : 'bg-[#c9c2b3]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
