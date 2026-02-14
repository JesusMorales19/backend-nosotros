import app from "./src/app.js";
import { connectMongo } from "./src/config/mongo.js";
import express from "express"

connectMongo();

app.listen(4000, () => {
  console.log("Servidor en puerto 4000 💖");
});

app.use("/uploads", express.static("uploads"))
