import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) return res.status(401).json({ msg: "No token" });

  // Eliminar "Bearer " si existe
  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length).trim();
  }

  try {
    const decoded = jwt.verify(token, "secret_amor");
    req.user = decoded; // req.user = { id, username }
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token inválido" });
  }
};
