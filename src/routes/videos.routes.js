import { Router } from "express";
import { upload } from "../config/upload.js"; // tu multer config
import { uploadVideo, getVideos } from "../controllers/video.controller.js";

const router = Router();

router.get("/", getVideos);
router.post("/", upload.single("file"), uploadVideo);

export default router;
