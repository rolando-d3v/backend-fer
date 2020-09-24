const { Router } = require("express");

//MIDDLEWARE DE AUTHORIZATION
const {verificaToken, verificaAdmin_Role} = require('../middlewares/auth');


const router = Router();
const { getUsuarios, postUsuario, updateUsuario, deleteUsuario } = require("../controllers/usuarioController");

router.get("/usuarios", verificaToken, getUsuarios);
router.post('/usuarios', postUsuario)
router.put('/usuarios/:IdUsuario', [verificaToken, verificaAdmin_Role],  updateUsuario)
router.delete('/usuarios/:IdUsuario', verificaToken, deleteUsuario)

module.exports = router;
