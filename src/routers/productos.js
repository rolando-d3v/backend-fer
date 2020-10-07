const {Router} = require('express');
const {verificaToken} = require('../middlewares/auth')


const {getProductos, getProducto, createProducto, updateProducto, removeProducto } = require('../controllers/productosController')

const router = Router()

router.get('/productos', getProductos)
router.get('/productos/:idProducto', getProducto)
router.post('/productos', verificaToken, createProducto)
router.put('/productos/:idProducto', updateProducto)
router.delete('/productos/:idProducto', removeProducto)

module.exports = router

