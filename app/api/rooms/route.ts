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


export async function POST() {

}
