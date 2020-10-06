const jwt = require("jsonwebtoken");
require("../config/config");

//=========================
// VERIFICA Y VALIDA TOKEN
//=========================
exports.verificaToken = (req, res, next) => {
  let token = req.get("Authorization");
  if (!token) {
    res.send({ ok: false, message: "token no existe" });
  }

  // //PRIMERA FORMA DE HACER
  //   const userToken = jwt.verify(token, process.env.SECRET);
  //   if (!userToken) {
  //     const err = new Error("no autenticado")
  //     err.statusCode = 401
  //     throw err
  //   }


  // SEGUNDA FORMA DE HACER
  jwt.verify(token, process.env.SECRET, (err, usuarioDecoded) => {
    if (err) {
      res.send({ ok: err, message: "token no es valido" });
      throw err;
    } else {
      console.log(usuarioDecoded);
      req.usuario = usuarioDecoded
    }
  });
  next();
};




//==============================
// AUTHORIZATION PARA USER ADMIN
//==============================
exports.verificaAdmin_Role = (req, res, next) => {
  let usuario = req.usuario
  if(usuario.role == "ADMIN_ROLE") {
    next()
  } else {
    return res.json({
      ok: false,
      err: {
        message: "el user no es Administrador"
      }
    })
  }
}