import { NextResponse } from "next/server";
import { conexion } from "../ConnectDb";
import {Room} from "../models/rooms.model";
import mongoose from "mongoose";

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



export async function PUT(req: Request) {
  try {
    await conexion();

    const body = await req.json();
    const { _id, ...rest } = body;

    if (!_id) {
      return NextResponse.json(
        { error: "Falta el _id del room a actualizar" },
        { status: 400 }
      );
    }

    const updatedRoom = await Room.findByIdAndUpdate(
      _id,
      rest,
      { new: true }
    ).lean();

    if (!updatedRoom) {
      return NextResponse.json(
        { error: "No se encontró la habitación con ese ID" },
        { status: 404 }
      );
    }

    console.log("RESULTADO UPDATE:", updatedRoom);

    return NextResponse.json(updatedRoom);
  } catch (error: any) {
    console.error("ERROR EN PUT /rooms:", error);

    return NextResponse.json(
      { error: "Error interno del servidor", details: error.message },
      { status: 500 }
    );
  }
}
