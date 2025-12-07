'use client';
import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-16 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Descripción */}
        <div>
          <h2 className="text-lg font-bold mb-3 text-green-700">Jungle Expedition</h2>
          <p className="text-sm">
            Vive la experiencia del Parque Tayrona con comodidad y seguridad. Reserva con nosotros y conéctate con la naturaleza.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h3 className="text-md font-semibold mb-3">Enlaces</h3>
          <ul className="text-sm space-y-2">
              <li><Link  href="/" className="hover:text-cyan-700 transition-colors duration-200">Home</Link></li>
            <li><Link href="/tours" className="hover:text-cyan-700 transition-colors duration-200">Tours</Link></li>
            <li><Link href="/#cards" className="hover:text-cyan-700 transition-colors duration-200">Habitaciones</Link></li>
            <li><Link href="/about" className="hover:text-cyan-700 transition-colors duration-200">Sobre Nosotros</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-md font-semibold mb-3">Contacto</h3>
          <ul className="text-sm space-y-2">
            <li>📍 Santa Marta, Magdalena</li>
            <li>📧 jzabalet_27@hotmail.com</li>
            <li>📞 +57 311-417-45-20</li>
            <li>
              <a
                href="https://wa.me/573114174520"
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-700 flex items-center gap-1"
              >
                <FaWhatsapp className="inline" /> Escríbenos por WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-md font-semibold mb-3">Síguenos</h3>
          <div className="flex space-x-4 text-green-700 text-xl">
            <a
              href="https://www.instagram.com/tayrona_camping/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@jorgezabaleta1981"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
            <a
              href="https://wa.me/573114174520"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-100 text-center text-sm py-4 border-t">
        © {new Date().getFullYear()} Jungle Expedition. Todos los derechos reservados.
      </div>
    </footer>
  );
}
