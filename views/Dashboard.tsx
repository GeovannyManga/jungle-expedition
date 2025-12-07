"use client";

import { useState } from "react";
import ToursEdit from "../components/ToursEdit";
import RoomEdit from "../components/RoomsEdit";

export default function Dashboard() {
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [activeView, setActiveView] = useState<string | null>(null);

  const ACCESS_PASSWORD = "admin123";

  const handleLogin = () => {
    if (password === ACCESS_PASSWORD) {
      setIsAuth(true);
    } else {
      alert("Contraseña incorrecta");
    }
  };

  // =============================
  // Pantalla de Login
  // =============================
  if (!isAuth) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Acceder al Dashboard</h1>

        <input
          type="password"
          placeholder="Ingresa la contraseña"
          className="border p-3 rounded-lg w-64 mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Entrar
        </button>
      </div>
    );
  }

  // =============================
  // Pantalla de Bienvenida
  // =============================
  const WelcomeScreen = () => (
    <div className="bg-white shadow-md rounded-xl p-10 text-center max-w-2xl mx-auto border">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        Bienvenido al Dashboard
      </h1>

      <p className="text-gray-600 text-lg mb-4">
        Administra fácilmente tus <strong>Rooms</strong> y <strong>Tours</strong>.
      </p>

      <p className="text-gray-500">
        Selecciona una opción del menú para comenzar.
      </p>
    </div>
  );

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 flex flex-col gap-4">
        <h2 className="text-xl font-semibold mb-6">Dashboard</h2>

        <button
          onClick={() => setActiveView("tours-edit")}
          className={`text-left px-3 py-2 rounded transition ${
            activeView === "tours-edit"
              ? "bg-blue-600"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          Crear Room
        </button>

        <button
          onClick={() => setActiveView("rooms-edit")}
          className={`text-left px-3 py-2 rounded transition ${
            activeView === "rooms-edit"
              ? "bg-blue-600"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          Editar Room
        </button>
      </aside>

      {/* Contenido */}
      <main className="flex-1 p-8 bg-gray-100">
        {!activeView && <WelcomeScreen />}

        {activeView === "tours-edit" && <ToursEdit />}
        {activeView === "rooms-edit" && <RoomEdit />}
      </main>
    </div>
  );
}
