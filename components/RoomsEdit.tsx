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
  img: string; // principal
  bannerImage: string[]; // múltiples imágenes
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

  const handleAddBannerImage = () => {
    if (!selected) return;
    setSelected({
      ...selected,
      bannerImage: [...selected.bannerImage, ""],
    });
  };

  const handleRemoveBannerImage = (index: number) => {
    if (!selected) return;
    const updated = selected.bannerImage.filter((_, i) => i !== index);
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

  const reloadRooms = async () => {
    const res = await fetch("/api/rooms");
    const data = await res.json();
    setRooms(data);
    setFilteredRooms(data);
  };

  const handleSave = async () => {
    if (!selected) return;

    const payload = {
      _id: selected._id,
      title: selected.title ?? "",
      location: selected.location ?? "",
      price: selected.price ?? 0,
      img: selected.img ?? "",
      bannerImage: selected.bannerImage ?? [],
      description: {
        ubicacion: selected.description?.ubicacion ?? "",
        alojamiento: selected.description?.alojamiento ?? "",
        servicios: selected.description?.servicios ?? "",
        actividades: selected.description?.actividades ?? "",
        opiniones: selected.description?.opiniones ?? [],
      },
    };

    const res = await fetch("/api/rooms", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      alert("Error al guardar");
      return;
    }

    await reloadRooms();
    alert("Habitación actualizada correctamente");
    setSelected(null);
  };

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

                <img
                  src={room.img}
                  className="w-full h-32 object-cover rounded mt-3"
                />
                <p className="text-xs mt-2 break-all">{room.img}</p>
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

          {/* Título */}
          <input
            className="border p-3 rounded"
            value={selected.title}
            onChange={(e) =>
              setSelected({ ...selected, title: e.target.value })
            }
          />

          {/* Ubicación */}
          <input
            className="border p-3 rounded"
            value={selected.location}
            onChange={(e) =>
              setSelected({ ...selected, location: e.target.value })
            }
          />

          {/* Precio */}
          <input
            className="border p-3 rounded"
            type="number"
            value={selected.price}
            onChange={(e) =>
              setSelected({ ...selected, price: Number(e.target.value) })
            }
          />

          {/* IMAGEN PRINCIPAL */}
          <div className="flex gap-4 items-start border p-4 rounded">
            <img
              src={selected.img}
              className="w-40 h-28 object-cover rounded border shadow"
            />

            <input
              className="border p-3 rounded w-full"
              value={selected.img}
              onChange={(e) =>
                setSelected({ ...selected, img: e.target.value })
              }
            />
          </div>

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

            <div className="grid gap-4">
              {selected.bannerImage.map((url, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start border p-3 rounded"
                >
                  <img
                    src={url}
                    className="w-32 h-24 object-cover rounded border"
                  />

                  <input
                    value={url}
                    className="border p-3 rounded w-full"
                    onChange={(e) =>
                      handleBannerChange(index, e.target.value)
                    }
                  />

                  <button
                    type="button"
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleRemoveBannerImage(index)}
                  >
                    Eliminar
                  </button>
                </div>
              ))}

              {/* AÑADIR NUEVA IMAGEN */}
              <button
                type="button"
                className="bg-blue-600 text-white px-3 py-2 rounded w-fit"
                onClick={handleAddBannerImage}
              >
                + Añadir imagen
              </button>
            </div>
          </div>

          {/* GUARDAR */}
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
