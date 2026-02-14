import { Router } from "express";
import { uploadPhoto, getPhotos, upload } from "../controllers/photo.controller.js";

const router = Router();

router.post("/upload", upload.single("photo"), uploadPhoto);
router.get("/", getPhotos);

export default router;
