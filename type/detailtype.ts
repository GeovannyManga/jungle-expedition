export interface RoomDescription {
  ubicacion: string;
  alojamiento: string;
  servicios: string;
  actividades: string;
  opiniones: string[];
}

export interface Room {
  title: string;
  location: string;
  price: number;
  img: string;
  bannerImage: string[];
  description: RoomDescription;
}
