"use client";

import { createContext, ReactNode, useEffect, useState } from "react";

interface RoomDescription {
  ubicacion: string;
  alojamiento: string;
  servicios: string;
  actividades: string;
  opiniones: string[];
}

interface Room {
  _id: string;
  title: string;
  location: string;
  price: number;
  img: string;
  bannerImage: string[];
  description: RoomDescription;
}

type RoomsContextType = {
  rooms: Room[];
  loading: boolean;
};

const RoomsContext = createContext<RoomsContextType>({
  rooms: [],
  loading: true,
});

type Props = {
  children: ReactNode;
};

export const RoomsProvider = ({ children }: Props) => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  const getRooms = async () => {
    try {
      const res = await fetch("/api/rooms", { cache: "no-store" });
      const data = await res.json();
      setRooms(data);
      setLoading(false);
    } catch (err) {
      console.error("Error cargando habitaciones:", err);
    }
  };

  useEffect(() => {
    getRooms(); // cargar una vez al montar

    // 🔄 refresco automático cada 5 segundos
    const interval = setInterval(() => {
      getRooms();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <RoomsContext.Provider value={{ rooms, loading }}>
      {children}
    </RoomsContext.Provider>
  );
};

export default RoomsContext;
