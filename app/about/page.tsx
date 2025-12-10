'use client';

import Image from "next/image";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const documents = [
  { name: "Registro Nacional de Turismo (RNT)", file: "/RNT.pdf" },
  { name: "Rol Único Tributario (RUT)", file: "/rut.pdf" },
];

const gallery = [
  "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751845678/samples/detailsTuBooking/tours/caption_u8aune.jpg",
  "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751845175/samples/detailsTuBooking/tours/mini_hrjkae.jpg",
  "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751844827/samples/detailsTuBooking/tours/caminata-cabo-san-juan_e3hlkp.webp",
  "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751773109/samples/detailsTuBooking/bamboo/AC9h4nrqA3PMusbiN-07mn28-o7bUraBJsLTJ1EIU7s4-W9tYGXQfyCSbfyZo58Wh4XN_7aJX2Zy-Zlvatv3cf8rHtThMETV_BiqTRsSg5jzKve_0gD9qExKEeJsZvY3oJawiGTkr9x0_s1360-w1360-h1020-rw_glns5y.webp",
  "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751780284/samples/detailsTuBooking/amanecer/AC9h4npwdXPiA5QGFkX74ZQuWg90vEyW8j0bFpzSxzwzOhU_J8ayQ-ypG25AZQIB22wFVnijLFEktQoLcTig4_TKh3hgacsGPoao0XcQsn7qmRSrJFaWqmFg_wv2-EGkYZqpHSROPcmU0Q_s1360-w1360-h1020-rw_ocg1zw.webp",
  "https://res.cloudinary.com/drpyfh8bw/image/upload/v1751845855/samples/detailsTuBooking/tours/yog_fpbvfd.jpg",
];

export default function AboutUs() {
  return (
    <div className="bg-[#0f1a12] min-h-screen">
      <NavBar />

      <section className="px-6 py-16 md:px-20 mt-20 text-[#f6f4ee]">

        {/* HERO SALVAJE */}
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-wide text-[#c2b280] drop-shadow-xl">
            Jungle Expedition
          </h2>

          <p className="text-lg md:text-2xl leading-relaxed mt-6 text-[#e8dcb5] max-w-3xl mx-auto">
            Somos exploradores del Tayrona. Fusionamos aventura, cultura y naturaleza 
            para crear experiencias auténticas, profundas y respetuosas con la selva.
          </p>

          {/* Línea bamboo */}
          <div className="w-32 h-1 bg-[#c2b280] mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(194,178,128,0.7)]"></div>
        </div>

        {/* GALERÍA POLAROID SALVAJE */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-[#c2b280] mb-12 uppercase tracking-wider">
            Lo que hacemos
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {gallery.map((src, idx) => (
              <div
                key={idx}
                className={`
                  relative
                  w-full h-72
                  p-4 
                  bg-[#f2ebd9] 
                  rounded-xl
                  shadow-[0_8px_25px_rgba(0,0,0,0.6)]
                  transform 
                  transition-all
                  hover:scale-[1.05]
                  ${idx % 2 === 0 ? "rotate-[-4deg]" : "rotate-[3deg]"}
                `}
              >
                {/* Cinta adhesiva */}
                <div className="
                  absolute top-[-18px] left-1/2 -translate-x-1/2 
                  w-28 h-7 
                  bg-[#e6dcc2]
                  opacity-90 
                  rounded-sm
                  shadow-md 
                  border border-[#d8caa9]
                "></div>

                {/* Foto */}
                <div className="relative w-full h-full overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={src}
                    alt={`Actividad ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LEGALIDAD BAMBOO */}
        <div className="bg-[#16261a] border border-[#4b6b47] rounded-2xl p-12 shadow-[0_0_20px_rgba(0,0,0,0.5)] max-w-5xl mx-auto">

          <h3 className="text-3xl font-bold text-center mb-8 text-[#c2b280] drop-shadow-lg">
            Legalidad & Confianza
          </h3>

          <p className="text-center text-[#e8dcb5] mb-10 leading-relaxed text-lg">
            Operamos bajo certificaciones oficiales del Parque Nacional Tayrona.
            Cumplimos con todos los requisitos legales para garantizar un servicio
            seguro, profesional y completamente autorizado.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            {documents.map((doc, index) => (
              <a
                key={index}
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#f6f4ee] text-[#34503a] border-2 border-[#4b6b47] rounded-xl font-semibold shadow hover:bg-[#e8e4d4] transition"
              >
                {doc.name}
              </a>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-[#c2b280]">
            Puedes consultar o descargar cada documento cuando lo necesites.
          </p>
        </div>

      </section>

      <Footer />
    </div>
  );
}
