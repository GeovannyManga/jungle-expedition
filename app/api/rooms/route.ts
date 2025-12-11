import { NextResponse } from "next/server";
import { conexion } from "../ConnectDb";
import {Room} from "../models/rooms.model";

export async function GET() {
  try {
    await conexion();

    const data = await Room.find({}); // ← ahora sí trae de rooms

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error GET /rooms:", error);
    return NextResponse.json(
      { error: "Error al obtener rooms" },
      { status: 500 }
    );
  }
}


export async function PUT(req: Request, { params }: any) {
  try {
    await conexion();

    const { id } = params;
    const data = await req.json();

    // Asegurar estructura correcta para evitar errores de validación
    const updateData = {
      title: data.title,
      location: data.location,
      price: data.price,
      img: data.img,
      bannerImage: data.bannerImage,
      description: {
        ubicacion: data.description?.ubicacion ?? "",
        alojamiento: data.description?.alojamiento ?? "",
        servicios: data.description?.servicios ?? "",
        actividades: data.description?.actividades ?? "",
        // ⭐ IMPORTANTE: siempre enviar un array válido
        opiniones: data.description?.opiniones ?? [],
      },
    };

    const updated = await Room.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return NextResponse.json(
        { error: "No se encontró la habitación" },
        { status: 404 }
      );
    }

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Error PUT /rooms/:id:", error);
    return NextResponse.json(
      { error: "Error al actualizar la habitación" },
      { status: 500 }
    );
  }
}
