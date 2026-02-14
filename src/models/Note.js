import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  text: { type: String, required: true },
  owner: { type: String, required: true }, // aquí guardamos el userId
}, { timestamps: true });

export default mongoose.model("Note", NoteSchema);
