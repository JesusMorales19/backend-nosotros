import express from "express";
import Media from "../models/Media.js";
import Note from "../models/Note.js";
import Letter from "../models/Letter.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const photos = await Media.countDocuments({ type: "photo" });
  const videos = await Media.countDocuments({ type: "video" });
  const notes = await Note.countDocuments({ to: req.user.username });
  const letters = await Letter.countDocuments({ to: req.user.username });

  res.json({ photos, videos, notes, letters });
});

export default router;
