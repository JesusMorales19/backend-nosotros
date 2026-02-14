import { Router } from "express";
import { getAll, create, remove } from "../controllers/note.controller.js";
import { auth } from "../middleware/auth.js";

const router = Router();

router.get("/", auth, getAll);
router.post("/", auth, create);
router.delete("/:id", auth, remove);

export default router;
