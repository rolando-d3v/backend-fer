const {Router} = require('express');
const {verificaToken} = require('../middlewares/auth')


const {getProductos, getProducto, createProducto, updateProducto, removeProducto } = require('../controllers/productosController')

const router = Router()

router.get('/productos',  getProductos)
router.get('/productos/:idProducto', verificaToken, getProducto)
router.post('/productos', verificaToken, createProducto)
router.put('/productos/:idProducto', verificaToken, updateProducto)
router.delete('/productos/:idProducto', verificaToken, removeProducto)

module.exports = router


