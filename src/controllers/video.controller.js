import Video from "../models/video.js";
import fs from "fs";

// Convierte archivo a base64
const toBase64 = (filePath) => {
  const data = fs.readFileSync(filePath);
  return `data:video/mp4;base64,${data.toString("base64")}`;
};

// Subir video
export const uploadVideo = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ msg: "No file uploaded" });

    const base64Data = toBase64(req.file.path);

    const video = await Video.create({
      filename: req.file.originalname,
      path: base64Data,
      uploadedBy: "system"
    });

    // Borrar archivo temporal
    fs.unlinkSync(req.file.path);

    res.json(video);
  } catch (err) {
    console.error("UPLOAD VIDEO ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

// Obtener todos los videos
export const getVideos = async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 });
    res.json(videos);
  } catch (err) {
    console.error("GET VIDEOS ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};
