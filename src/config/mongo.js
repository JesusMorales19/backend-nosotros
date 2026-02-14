import mongoose from "mongoose";

export const connectMongo = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://fernandajesus:Noviembre-31@cluster0.fq3b2md.mongodb.net/31Noviembre"
    );
    console.log("Mongo conectado a DB 31Noviembre 💖");
  } catch (e) {
    console.error("Error Mongo:", e.message);
    process.exit(1);
  }
};
