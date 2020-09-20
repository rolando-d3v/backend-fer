const e = require("express");
const jwt = require("jsonwebtoken");

require("../config/config");

// VERIFICA Y VALIDA TOKEN
exports.verificaToken =  (req, res, next) => {
  let token = req.get("Authorization");
  if (!token) {
    res.send({ ok: false, message: "token no existe" });
  }

// PRIMERA FORMA DE HACER
//   const userToken = jwt.verify(token, process.env.SECRET);
//   if (!userToken) {
//     res.send(userToken);
//   }



// SEGUNDA FORMA DE HACER
jwt.verify(token, process.env.SECRET, (err, usuarioDecoded) => {
    if (err) {
      res.send({ ok: err, message: "token no es valido"});
    } else {
        console.log(usuarioDecoded)
    }
})
  next();
};
