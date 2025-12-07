'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function KnowBeforeGo() {
  return (
    <section className="relative bg-gradient-to-b from-sky-50 to-white py-24 px-6 md:px-20 overflow-hidden">

      {/* Decoraciones salvajes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-200/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      {/* Título */}
      <div className="max-w-4xl mx-auto mb-14 text-center relative">
        <h2 className="text-5xl md:text-6xl font-black text-sky-900 tracking-tight">
          Información útil para tu visita
        </h2>
        <p className="text-gray-700 text-xl mt-4 max-w-2xl mx-auto">
          Todo lo que necesitas saber antes de ingresar al Parque Nacional Tayrona
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-14 items-center max-w-7xl mx-auto relative">

        {/* BLOQUE DE IMÁGENES */}
        <div className="grid grid-cols-2 gap-5 relative">

          <div className="rounded-3xl overflow-hidden shadow-2xl h-72 relative transform rotate-[-3deg] hover:rotate-[-1deg] transition-all duration-700">
            <Image
              src="https://res.cloudinary.com/drpyfh8bw/image/upload/v1751953346/samples/detailsTuBooking/legal/Senderismo-Panama_LPRIMA20170330_0018_35.jpg_c7zdfn.webp"
              alt="Ropa adecuada"
              fill
              className="object-cover"
            />
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl h-72 relative mt-10 transform rotate-[3deg] hover:rotate-[1deg] transition-all duration-700">
            <Image
              src="https://res.cloudinary.com/drpyfh8bw/image/upload/v1751953423/samples/detailsTuBooking/legal/14664158758889_n6fsij.jpg"
              alt="Mapa del parque"
              fill
              className="object-cover"
            />
          </div>

          {/* Capa decorativa */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-sky-300/40 blur-xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-green-300/40 blur-xl rounded-full"></div>
          </div>
        </div>

        {/* BLOQUE DE TEXTO */}
        <div className="text-gray-900">
          <p className="text-sky-700 uppercase font-bold tracking-wider mb-3">
            Antes de tu viaje
          </p>

          <h3 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-sky-900">
            ¿Qué necesitas saber antes de visitar el Tayrona?
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Te compartimos información esencial como tarifas, reglas del parque,
            horarios, recomendaciones de ropa, documentos necesarios y más.
            <br />
            <span className="font-semibold text-sky-900">
              Prepárate para vivir una experiencia sin contratiempos.
            </span>
          </p>

          <Link
            href="/legalInfo"
            className="inline-flex items-center gap-3 bg-sky-700 text-white px-8 py-4 rounded-full 
                       font-semibold text-lg shadow-lg
                       hover:bg-sky-900 hover:shadow-xl transition-all"
          >
            Ver información completa
            <span className="text-2xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
