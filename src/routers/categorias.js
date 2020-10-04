const {Router} = require('express');


const {verificaToken} = require('../middlewares/auth')

const {obtenerCategorias, obtenerCategoria, createCategorias, updateCategorias, removeCategorias} = require('../controllers/categoriaController')

const router = Router()

router.get("/categoria", obtenerCategorias);
router.get("/categoria/:idCategoria", obtenerCategoria);
router.post("/categoria", createCategorias);
router.put("/categoria/:idCategoria", updateCategorias);
router.delete("/categoria/:idCategoria", removeCategorias);

module.exports = router

