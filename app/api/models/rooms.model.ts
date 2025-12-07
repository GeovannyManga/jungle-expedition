import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const { Schema } = mongoose;

const RoomSchema = new Schema(
  {
   _id: { type: String, default: uuidv4 },

    title: { type: String, required: true },
    
    location: { type: String, required: true },

    price: { type: Number, required: true },

    img: { type: String, required: true },

    bannerImage: {
      type: [String],
      required: true,
    },

    description: {
      ubicacion: { type: String, required: true },
      alojamiento: { type: String, required: true },
      servicios: { type: String, required: true },
      actividades: { type: String, required: true },

      opiniones: {
        type: [String],
        required: true,
      },
    },
  },
  { timestamps: true }
);

export const Room = mongoose.models.room || mongoose.model("room", RoomSchema, "room");
