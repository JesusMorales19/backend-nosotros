import Note from "../models/Note.js";

export const getAll = async (req, res) => {
  try {
    const username = req.user.username; // obtenido del token
    let notes;

    if (username === "jesus") {
      // Jesús ve solo las notas de Fernanda
      notes = await Note.find({ owner: "fernanda" }).sort({ createdAt: -1 });
    } else if (username === "fernanda") {
      // Fernanda ve solo las notas de Jesús
      notes = await Note.find({ owner: "jesus" }).sort({ createdAt: -1 });
    } else {
      // Si hay otro usuario, no devolvemos nada
      notes = [];
    }

    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear nota: el owner es el usuario que hace la petición
export const create = async (req, res) => {
  try {
    const username = req.user.username; // tomado del token

    const note = await Note.create({
      text: req.body.text,
      owner: username, // aquí se guarda quién creó la nota
    });

    res.json(note);
  } catch (err) {
    res.status(500).json({ error: "No se pudo crear la nota. Revisa tu login." });
  }
};

// Borrar nota (opcional)
export const remove = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
