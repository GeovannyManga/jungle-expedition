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

export async function PUT(req: Request) {
  try {
    await conexion();

    const body = await req.json();
    const { _id, ...rest } = body;
    
    const updatedTour = await Tour.findByIdAndUpdate(_id, rest, { new: true }).lean();
    console.log(updatedTour, "sigue fallando el findbyidandupdate")

    if (!updatedTour) {
      return NextResponse.json({ error: "No se encontró el tour" }, { status: 404 });
    }

    return NextResponse.json(updatedTour);
  } catch (e) {
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
