import {Router} from "express";
import Letter from "../models/Letter.js";

const r = Router();

r.get("/", async (_,res)=>{
  res.json(await Letter.find());
});

r.post("/", async (req,res)=>{
  res.json(await Letter.create(req.body));
});

export default r;
