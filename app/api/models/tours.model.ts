import mongoose, {Schema} from "mongoose";

import { v4 as uuidv4 } from "uuid";

const TourSchema = new Schema(
  {
    _id: { type: String, default: uuidv4 },

    title: { type: String, required: true },

    description: { type: String, required: true },

    duration: { type: String, required: true },

    difficulty: { type: String, required: true },

    price: { type: String, required: true },

    img: { type: String, required: true }
  },
  {
    timestamps: true,
  }
);

export const Tour = mongoose.models.tour || mongoose.model("tour", TourSchema, "tour");