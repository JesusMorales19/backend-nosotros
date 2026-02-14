import mongoose from "mongoose";

const PhotoSchema = new mongoose.Schema(
  {
    filename: { type: String, required: true },
    data: { type: String, required: true }, // Aquí se guardará el Base64
    uploadedBy: { type: String, default: "system" }
  },
  { timestamps: true }
);

export default mongoose.model("Photo", PhotoSchema);
