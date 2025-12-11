"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

interface Tour {
  _id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  price: string;
  img: string;
}

const TourCards = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await fetch("/api/tours");
        const data = await res.json();
        setTours(data);
      } catch (error) {
        console.error("Error fetching tours:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex justify-center py-20 text-xl font-bold text-green-900">
        Cargando tours...
      </div>
    );
  }

  return (
    <div className="w-full px-4 md:px-10 py-10 bg-[#0c1f0f] mt-20">
      <NavBar></NavBar>
      <h2 className="text-3xl md:text-4xl font-extrabold text-green-200 text-center mb-10 ">
      🌿Tours en Tayrona🌿
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour) => (
          <div
            key={tour._id}
            className="bg-[#1a2d1c] rounded-2xl overflow-hidden shadow-xl border border-green-900 hover:scale-[1.02] transition-transform"
          >
            <div className="h-56 overflow-hidden">
              <Image
               height={800}
               width={800}
                src={tour.img}
                alt={tour.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold text-green-100 mb-2">
                {tour.title}
              </h3>

              <p className="text-green-200 text-sm opacity-90 mb-3">
                {tour.description}
              </p>

              <div className="text-green-300 text-sm mb-1">
                ⏳ <span className="font-semibold">{tour.duration}</span>
              </div>

              <div className="text-green-300 text-sm mb-1">
                🥾 <span className="font-semibold">{tour.difficulty}</span>
              </div>

              <div className="text-green-400 text-lg font-bold mt-3">
                {tour.price}
              </div>

              <a
                href={`https://wa.me/573114174520?text=Hola!%20Estoy%20interesado%20en%20el%20tour:%20${encodeURIComponent(
                  tour.title
                )}`}
                target="_blank"
                className="block mt-5 bg-green-700 hover:bg-green-600 text-white text-center py-3 rounded-xl font-semibold shadow-md"
              >
                Reservar por WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
        <Footer></Footer>
    </div>
  );
};

export default TourCards;
