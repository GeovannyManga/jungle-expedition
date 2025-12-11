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

    const { id } = params; // viene en string, está bien porque tu _id ES string
    const body = await req.json();

    // Asegurar estructura correcta
    const updateData = {
      title: body.title,
      location: body.location,
      price: body.price,
      img: body.img,
      bannerImage: body.bannerImage,
      description: {
        ubicacion: body.description?.ubicacion ?? "",
        alojamiento: body.description?.alojamiento ?? "",
        servicios: body.description?.servicios ?? "",
        actividades: body.description?.actividades ?? "",
        opiniones: body.description?.opiniones ?? [],
      },
    };

    const updated = await Room.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return NextResponse.json(
        { error: "Habitación no encontrada" },
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
