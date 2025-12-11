"use client";

import { useEffect, useState } from "react";

type Description = {
  ubicacion: string;
  alojamiento: string;
  servicios: string;
  actividades: string;
  opiniones: string[];
};

type Room = {
  _id: string;
  title: string;
  location: string;
  price: number;
  img: string;
  bannerImage: string[];
  description: Description;
};

export default function RoomEdit() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [filteredRooms, setFilteredRooms] = useState<Room[]>([]);
  const [search, setSearch] = useState<string>("");
  const [selected, setSelected] = useState<Room | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/rooms")
      .then((res) => res.json())
      .then((data: Room[]) => {
        setRooms(data);
        setFilteredRooms(data);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = (value: string) => {
    setSearch(value);
    const filtered = rooms.filter(
      (r) =>
        r.title.toLowerCase().includes(value.toLowerCase()) ||
        r.price.toString().includes(value)
    );
    setFilteredRooms(filtered);
  };

  const handleBannerChange = (index: number, value: string) => {
    if (!selected) return;
    const updated = [...selected.bannerImage];
    updated[index] = value;
    setSelected({ ...selected, bannerImage: updated });
  };

  const handleDescriptionChange = (
    field: keyof Description,
    value: string
  ) => {
    if (!selected) return;
    setSelected({
      ...selected,
      description: { ...selected.description, [field]: value },
    });
  };

  // ⭐ FUNCION PARA GUARDAR
  const handleSave = async () => {
    if (!selected) return;

    const res = await fetch(`/api/rooms/${selected._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selected),
    });

    if (!res.ok) {
      alert("Error al guardar");
      return;
    }

    alert("Habitación actualizada correctamente");
    setSelected(null);
  };

  // LOADER
  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="animate-spin h-16 w-16 rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="w-full p-6">
      <h1 className="text-2xl font-bold mb-4">Editar Habitaciones</h1>

      {/* LISTA Y BUSCADOR */}
      {!selected && (
        <>
          <input
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Buscar por nombre o precio"
            className="border p-3 rounded w-full mb-4"
          />

          <div className="grid md:grid-cols-3 gap-4">
            {filteredRooms.map((room) => (
              <div
                key={room._id}
                onClick={() => setSelected(room)}
                className="bg-white p-4 rounded shadow cursor-pointer hover:bg-gray-100"
              >
                <h2 className="font-semibold text-lg">{room.title}</h2>
                <p className="text-sm text-gray-600">{room.location}</p>
                <p className="text-sm font-bold mt-2">${room.price}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* FORMULARIO DE EDICIÓN */}
      {selected && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
          className="bg-white p-6 rounded shadow-md mt-6 grid gap-4"
        >
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

          <input
            className="border p-3 rounded"
            value={selected.title}
            onChange={(e) =>
              setSelected({ ...selected, title: e.target.value })
            }
          />

          <input
            className="border p-3 rounded"
            value={selected.location}
            onChange={(e) =>
              setSelected({ ...selected, location: e.target.value })
            }
          />

          <input
            className="border p-3 rounded"
            type="number"
            value={selected.price}
            onChange={(e) =>
              setSelected({ ...selected, price: Number(e.target.value) })
            }
          />

          <input
            className="border p-3 rounded"
            value={selected.img}
            onChange={(e) => setSelected({ ...selected, img: e.target.value })}
          />

          {/* DESCRIPCIÓN */}
          <textarea
            className="border p-3 rounded"
            value={selected.description.ubicacion}
            onChange={(e) =>
              handleDescriptionChange("ubicacion", e.target.value)
            }
          />

          <textarea
            className="border p-3 rounded"
            value={selected.description.alojamiento}
            onChange={(e) =>
              handleDescriptionChange("alojamiento", e.target.value)
            }
          />

          <textarea
            className="border p-3 rounded"
            value={selected.description.servicios}
            onChange={(e) =>
              handleDescriptionChange("servicios", e.target.value)
            }
          />

          <textarea
            className="border p-3 rounded"
            value={selected.description.actividades}
            onChange={(e) =>
              handleDescriptionChange("actividades", e.target.value)
            }
          />

          {/* BANNER IMAGES */}
          <div>
            <h3 className="font-semibold mb-2">Banner Images</h3>

            {selected.bannerImage.map((url, index) => (
              <input
                key={index}
                className="border p-3 rounded mb-2 w-full"
                value={url}
                onChange={(e) => handleBannerChange(index, e.target.value)}
              />
            ))}
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Guardar cambios
          </button>
        </form>
      )}
    </div>
  );
}
