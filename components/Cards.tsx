'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState, useMemo } from 'react';
import RoomsContext from '../context/roomsContext';


export default function RoomCards() {
  const { rooms } = useContext(RoomsContext);
  const [locationFilter, setLocationFilter] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<number>(1000000);

  const locations = [
    'Cañaveral',
    'Arrecifes',
    'Piscina',
    'Cabo San Juan',
    'Playa Brava',
    'Zaino',
  ];

  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => {
      const locationMatch = locationFilter
        ? room.location.toLowerCase().includes(locationFilter.toLowerCase())
        : true;

      const priceMatch = room.price <= maxPrice;

      return locationMatch && priceMatch;
    });
  }, [rooms, locationFilter, maxPrice]);

  return (
    <div id="cards" className="bg-[#f7faf7] py-14 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-green-900 tracking-tight">
          🌿 Hospedajes dentro del Parque Tayrona 🌿
        </h2>
        <p className="text-green-800/70 mt-3 max-w-xl mx-auto">
          Encuentra el refugio perfecto entre la selva y el mar.
        </p>

        {/* Filtros */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          {/* Filtro por ubicación */}
          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="bg-white border border-green-800/30 rounded-xl px-4 py-2 text-green-900 
                       shadow-sm focus:ring-2 focus:ring-green-600 focus:border-green-600"
          >
            <option value="">Todas las ubicaciones</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          {/* Filtro por precio */}
          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-green-800/30 shadow-sm">
            <span className="text-sm text-green-900 whitespace-nowrap">
              Hasta ${maxPrice.toLocaleString('es-CO')}
            </span>
            <input
              type="range"
              min={0}
              max={1000000}
              step={50000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-40 accent-green-700"
            />
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto mt-12">
        {filteredRooms.length === 0 ? (
          <p className="text-center text-green-700/70 col-span-full">
            No hay resultados que coincidan con los filtros.
          </p>
        ) : (
          filteredRooms.map((room, index) => (
            <Link
              key={index}
              href={`/${encodeURIComponent(room.title)}`}
              className="group bg-white rounded-2xl border border-green-900/10 shadow-md
                         hover:shadow-xl hover:border-green-700/30 transition-all overflow-hidden"
            >
              <div className="relative h-48 bg-green-200/20">
                <Image
                  src={room.bannerImage[0]}
                  alt={room.title}
                  fill
                  sizes="100vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-green-900 group-hover:text-green-700">
                  {room.title}
                </h3>

                <p className="text-sm text-green-800/70 mt-1">
                  🌴 {room.location}
                </p>

                <p className="text-2xl font-bold text-green-700 mt-4">
                  ${room.price.toLocaleString('es-CO')}
                  <span className="text-sm text-green-800/70 font-normal"> / noche</span>
                </p>

                <button
                  className="mt-4 w-full bg-green-700 text-white py-2 rounded-xl 
                             hover:bg-green-800 transition shadow-md"
                >
                  Reservar
                </button>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
