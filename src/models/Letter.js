import mongoose from "mongoose";

export default mongoose.model("Letter", new mongoose.Schema({
  text:String,
  from:String,
  to:String,
  createdAt:{type:Date,default:Date.now}
}));
