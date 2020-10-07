const {Router} = require('express');


const {verificaToken, verificaAdmin_Role} = require('../middlewares/auth')

const {obtenerCategorias, obtenerCategoria, createCategorias, updateCategorias, removeCategorias} = require('../controllers/categoriaController')

const router = Router()

router.get("/categoria", verificaToken, obtenerCategorias);
router.get("/categoria/:idCategoria", verificaToken, obtenerCategoria);
router.post("/categoria", verificaToken, createCategorias);
router.put("/categoria/:idCategoria", updateCategorias);

router.delete(
  "/categoria/:idCategoria", [ verificaToken, verificaAdmin_Role], removeCategorias
);

module.exports = router;

