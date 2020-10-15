const {Router} = require('express');
const {verificaToken} = require('../middlewares/auth')


const {getProductos, getProducto, createProducto, updateProducto, removeProducto, getBusqueda } = require('../controllers/productosController')

const router = Router()

router.get('/productos', verificaToken,  getProductos)
router.get('/productos/:idProducto', verificaToken, getProducto)
router.post('/productos', verificaToken, createProducto)
router.put('/productos/:idProducto', verificaToken, updateProducto)
router.delete('/productos/:idProducto', verificaToken, removeProducto)

//ENDPOINT DE BUSQUEDA
router.get('/productos/buscar/:termino', verificaToken, getBusqueda)

module.exports = router


