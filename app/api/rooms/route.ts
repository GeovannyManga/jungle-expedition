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
    const body = await req.json();

    const updated = await Room.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Error PUT /rooms/:id:", error);
    return NextResponse.json({ error: "Error al actualizar" }, { status: 500 });
  }
}