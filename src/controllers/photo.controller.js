import Photo from "../models/photo.js";
import multer from "multer";
import sharp from "sharp";

// Multer en memoria
export const upload = multer({ storage: multer.memoryStorage() });

// Subir foto con reducción de tamaño
export const uploadPhoto = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ msg: "No file uploaded" });
    }

    // Usamos sharp para redimensionar y comprimir la imagen
    // Por ejemplo: ancho máximo 1024px y calidad 80%
    const optimizedBuffer = await sharp(req.file.buffer)
      .resize({ width: 1024, withoutEnlargement: true }) // ancho máximo 1024
      .jpeg({ quality: 80 }) // calidad 80%
      .toBuffer();

    const photo = await Photo.create({
      filename: req.file.originalname,
      mimetype: "image/jpeg", // ahora siempre JPEG comprimido
      data: optimizedBuffer.toString("base64"),
      uploadedBy: "system"
    });

    res.json(photo);
  } catch (err) {
    console.error("UPLOAD PHOTO ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

// Obtener todas las fotos
export const getPhotos = async (req, res) => {
  try {
    const photos = await Photo.find().sort({ createdAt: -1 });
    res.json(photos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
