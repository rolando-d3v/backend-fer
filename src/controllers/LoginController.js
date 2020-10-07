const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UsuarioModel = require("../models/usuarioModel");

require('../config/config')

exports.postLogin = async (req, res, next) => {
  let { email, password } = req.body;

  try {
    const userEmail = await UsuarioModel.findOne({ email: email });
    if (!userEmail) {
      res.status(400).json({ ok: false, message: " email no existe" });
    }

    const userPassword = await bcrypt.compare(password, userEmail.password);
    if (!userPassword) {
      res.status(400).json({ ok: false, message: "password incorrecto" });
    }

    let token = jwt.sign(
      { id: userEmail._id, email: userEmail.email, nombre: userEmail.nombre, role: userEmail.role },
      process.env.SECRET,
      { expiresIn: 60 * 60 * 12 }
    );

    res.json({
      ok: true,
      usuario: userEmail,
      token,
    });
  } catch (error) {
    res.send(error);
    next();
  }
};
