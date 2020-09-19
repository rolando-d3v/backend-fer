const { Router } = require("express");

//MIDDLEWARE DE AUTHORIZATION
const {verificaToken} = require('../middlewares/auth');


const router = Router();
const { getUsuarios, postUsuario, updateUsuario, deleteUsuario } = require("../controllers/usuarioController");

router.get("/usuarios", verificaToken, getUsuarios);
router.post('/usuarios', postUsuario)
router.put('/usuarios/:IdUsuario', updateUsuario)
router.delete('/usuarios/:IdUsuario', deleteUsuario)

module.exports = router;
