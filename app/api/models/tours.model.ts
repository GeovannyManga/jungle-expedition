import mongoose, {Schema} from "mongoose";

const TourSchema = new Schema(
  {
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

export const Tour = mongoose.models.tour || 
  mongoose.model("tour", TourSchema, "tour");
