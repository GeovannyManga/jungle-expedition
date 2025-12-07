'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      {/* NAVBAR PRINCIPAL — SIN BARRA SUPERIOR, FONDO NEGRO TRANSLÚCIDO CON BLUR */}
      <div className="w-full h-20 backdrop-blur-xl bg-sky-500/40 flex justify-between items-center px-4 md:px-10 shadow-lg">
        {/* LOGO */}
        <div className="flex items-center h-full">
          <div className="h-full flex items-center">
            <Image
              width={200}
              height={200}
              alt="logo"
              sizes="100vw"
              src="/jungle.png"
              className="object-contain drop-shadow-lg h-40 w-40"
            />
          </div>
        </div>

        {/* MENÚ ESCRITORIO */}
        <ul className="hidden lg:flex items-center gap-10 font-semibold text-white">
          <li><Link href="/" className="hover:text-cyan-400 transition">Home</Link></li>
          <li><Link href="/tours" className="hover:text-cyan-400 transition">Tours</Link></li>
          <li><Link href="/#cards" className="hover:text-cyan-400 transition">Habitaciones</Link></li>
          <li><Link href="/about" className="hover:text-cyan-400 transition">Sobre Nosotros</Link></li>
        </ul>

        {/* BOTÓN RESERVAR (ESCRITORIO) */}
        <Link
          target="_blank"
          href="https://wa.me/573114174520?text=Hola%2C%20estoy%20interesado%20en%20hacer%20una%20reserva%20dentro%20del%20Parque%20Tayrona.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20opciones%20disponibles%2C%20fechas%20y%20precios%3F%20Gracias."
          className="hidden lg:flex h-12 px-8 bg-emerald-600 text-white items-center justify-center rounded-xl hover:bg-cyan-700 transition font-bold shadow-md"
        >
          ¡Reserva Ahora!
        </Link>

        {/* MENÚ HAMBURGUESA (MÓVIL) */}
        <div className="flex lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE MOBILE */}
      {isOpen && (
        <div className="lg:hidden w-full px-6 py-4 flex flex-col gap-4 font-bold bg-black/60 backdrop-blur-xl text-white shadow-md animate-fade-in">
          <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
          <Link href="/tours" className="hover:text-cyan-400 transition">Tours</Link>
          <Link href="/#cards" className="hover:text-cyan-400 transition">Habitaciones</Link>
          <Link href="/about" className="hover:text-cyan-400 transition">Sobre Nosotros</Link>
          <Link
            target="_blank"
            href="https://wa.me/573114174520?text=Hola%2C%20estoy%20interesado%20en%20hacer%20una%20reserva%20dentro%20del%20Parque%20Tayrona.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20opciones%20disponibles%2C%20fechas%20y%20precios%3F%20Gracias."
            className="bg-cyan-600 text-white text-center rounded-xl py-2 mt-2 hover:bg-cyan-700 transition shadow-md"
          >
            ¡Reserva Ahora!
          </Link>
        </div>
      )}
    </div>
  );
}
