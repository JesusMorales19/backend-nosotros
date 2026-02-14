import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  filename: String,
  path: String,      // aquí se guarda el base64
  uploadedBy: String
}, { timestamps: true });

export default mongoose.model("Video", VideoSchema);
