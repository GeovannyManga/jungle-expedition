import { NextResponse } from "next/server";
import { conexion } from "../ConnectDb";
import {Tour} from "../models/tours.model";

export async function GET() {
  try {
    await conexion();

    const data = await Tour.find({}); // ← ahora sí trae de rooms

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error GET /tours:", error);
    return NextResponse.json(
      { error: "Error al obtener rooms" },
      { status: 500 }
    );
  }
}


export async function POST(req: Request) {
  try {
    await conexion();

    const body = await req.json(); // Datos enviados desde Thunder o frontend

    const newTour = await Tour.create(body);

    return NextResponse.json(newTour, { status: 201 });
  } catch (error) {
    console.error("Error POST /tours:", error);
    return NextResponse.json(
      { error: "Error al crear tour" },
      { status: 500 }
    );
  }
}
