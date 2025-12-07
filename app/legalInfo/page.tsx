'use client';

import { FaDownload } from 'react-icons/fa';
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";

interface LegalDocument {
  name: string;
  file: string;
  description: string;
}

const documents: LegalDocument[] = [
  {
    name: 'Reglas PNNC',
    file: '/1076.pdf',
    description: 'Reglamenta disposiciones sobre medio ambiente y desarrollo sostenible en Colombia.',
  },
  {
    name: 'Plan de Manejo PNNC',
    file: '/plan-de-manejo-del-pnn-sierra-nevada-de-santa-marta-y-tayrona.pdf',
    description: 'Guía la conservación y uso sostenible del Parque Tayrona.',
  },
  {
    name: 'Tarifa de transporte PNNC',
    file: '/precios-transporte.pdf',
    description: 'Listado oficial de tarifas para transporte.',
  },
  {
    name: 'Tarifa de ingreso PNNC',
    file: '/695.pdf',
    description: 'Valores actualizados para ingresar al Parque Tayrona 2025.',
  },
  {
    name: 'Resolución No. 1558 - de 2019',
    file: '/resolucion-1558-de-2019.pdf',
    description: 'Regula la prestación de servicios ecoturísticos.',
  },
];

export default function LegalInfo() {
  return (
    <div>
      <Navbar />

      {/* FONDO SELVA */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1508780709619-79562169bc64')] bg-cover bg-center bg-fixed py-20 px-6 md:px-20 mt-20">
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-5xl mx-auto text-white">
          <h2 className="text-4xl font-extrabold mb-6 text-center drop-shadow-lg">
            Documentación Legal & Tarifas
          </h2>

          <p className="text-lg text-center mb-10 max-w-3xl mx-auto opacity-90">
            Prepárate para explorar el Parque Tayrona con toda la información oficial necesaria.
            Antes de tu aventura, revisa estos documentos esenciales.
          </p>

          {/* GRID DE TARJETAS */}
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((doc, i) => (
              <li
                key={i}
                className="backdrop-blur-md bg-white/10 border border-white/20 p-5 rounded-xl shadow-lg hover:bg-white/20 transition"
              >
                <h3 className="font-bold text-white text-lg mb-2">{doc.name}</h3>
                <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                  {doc.description}
                </p>

                <a
                  href={doc.file}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2 bg-green-600/80 hover:bg-green-700 text-white rounded-lg transition mt-auto"
                >
                  <FaDownload />
                  Descargar PDF
                </a>
              </li>
            ))}
          </ul>

          <p className="text-sm text-center text-gray-200 mt-10 opacity-80">
            Toda la documentación está disponible para consulta y descarga.
          </p>
        </div>
      </section>

      {/* INFORMACIÓN ADICIONAL */}
      <section className="bg-green-900 text-white py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold mb-10 text-center">
            Información Importante Antes de Entrar al Parque
          </h2>

          <div className="bg-green-800/40 p-6 rounded-xl border border-green-700 mb-8">
            <h3 className="text-xl font-semibold mb-3">🌿 Recomendaciones de Vestimenta</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-200">
              <li>Ropa fresca y de secado rápido.</li>
              <li>Zapatos cerrados o sandalias deportivas.</li>
              <li>Gorra, sombrero o pañuelo para el sol.</li>
              <li>Traje de baño para las playas.</li>
              <li>Impermeable ligero para lluvias inesperadas.</li>
            </ul>
          </div>

          <div className="bg-green-800/40 p-6 rounded-xl border border-green-700">
            <h3 className="text-xl font-semibold mb-3">🪪 Documentos Necesarios</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-200">
              <li>Cédula o pasaporte vigente.</li>
              <li>Vacuna de fiebre amarilla (recomendado).</li>
              <li>Reserva del alojamiento o tour.</li>
              <li>Tarjeta de ingreso al Parque (si aplica).</li>
            </ul>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
