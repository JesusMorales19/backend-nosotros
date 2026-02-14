import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import photoRoutes from "./routes/photos.routes.js";
import videoRoutes from "./routes/videos.routes.js";
import noteRoutes from "./routes/note.routes.js";
import letterRoutes from "./routes/letter.routes.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/auth", authRoutes);
app.use("/api/photos", photoRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/letters", letterRoutes);


app.use("/uploads", express.static("uploads"))


export default app;
