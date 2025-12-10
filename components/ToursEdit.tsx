"use client";

import { useEffect, useState } from "react";

type Tour = {
  _id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  price: string;
  img: string;
};

export default function TourEdit() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [filteredTours, setFilteredTours] = useState<Tour[]>([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Tour | null>(null);

  useEffect(() => {
    fetch("/api/tour")
      .then((res) => res.json())
      .then((data: Tour[]) => {
        setTours(data);
        setFilteredTours(data);
      });
  }, []);

  const handleSearch = (value: string) => {
    setSearch(value);
    const filtered = tours.filter(
      (t) =>
        t.title.toLowerCase().includes(value.toLowerCase()) ||
        t.price.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredTours(filtered);
  };

  return (
    <div className="w-full p-6">
      <h1 className="text-2xl font-bold mb-4">Editar Tours</h1>

      {/* LISTA + BUSCADOR */}
      {!selected && (
        <>
          <input
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Buscar por nombre o precio"
            className="border p-3 rounded w-full mb-4"
          />

          <div className="grid md:grid-cols-3 gap-4">
            {filteredTours.map((tour) => (
              <div
                key={tour._id}
                onClick={() => setSelected(tour)}
                className="bg-white p-4 rounded shadow cursor-pointer hover:bg-gray-100"
              >
                <h2 className="font-semibold text-lg">{tour.title}</h2>
                <p className="text-sm text-gray-600">{tour.duration}</p>
                <p className="text-sm font-bold mt-2">{tour.price}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* FORMULARIO DE EDICIÓN */}
      {selected && (
        <form className="bg-white p-6 rounded shadow-md mt-6 grid gap-4">
          <h2 className="text-xl font-semibold mb-2">
            Editando: {selected.title}
          </h2>

          <button
            type="button"
            className="text-blue-600 underline"
            onClick={() => setSelected(null)}
          >
            ← Volver
          </button>

          {/* CAMPOS */}
          <input
            className="border p-3 rounded"
            value={selected.title}
            onChange={(e) =>
              setSelected({ ...selected, title: e.target.value })
            }
          />

          <textarea
            className="border p-3 rounded"
            value={selected.description}
            onChange={(e) =>
              setSelected({ ...selected, description: e.target.value })
            }
          />

          <input
            className="border p-3 rounded"
            value={selected.duration}
            onChange={(e) =>
              setSelected({ ...selected, duration: e.target.value })
            }
          />

          <input
            className="border p-3 rounded"
            value={selected.difficulty}
            onChange={(e) =>
              setSelected({ ...selected, difficulty: e.target.value })
            }
          />

          <input
            className="border p-3 rounded"
            value={selected.price}
            onChange={(e) =>
              setSelected({ ...selected, price: e.target.value })
            }
          />

          <input
            className="border p-3 rounded"
            value={selected.img}
            onChange={(e) =>
              setSelected({ ...selected, img: e.target.value })
            }
          />

          <button
            type="button"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Guardar cambios (sin lógica todavía)
          </button>
        </form>
      )}
    </div>
  );
}
