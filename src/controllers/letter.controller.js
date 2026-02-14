import Letter from "../models/Letter.js";

export const getAll = async (req,res) => {
  res.json(await Letter.find().sort({createdAt:-1}));
};

export const create = async (req,res) => {
  res.json(await Letter.create(req.body));
};

export const remove = async (req,res) => {
  await Letter.findByIdAndDelete(req.params.id);
  res.json({ ok:true });
};
