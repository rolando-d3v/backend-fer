const {Router} = require('express');

//MIDDLEWARE DE AUTHORIZATION
const {verificaToken} = require('../middlewares/auth');

const router = Router()
const {postLogin} = require('../controllers/LoginController')

router.post('/login',postLogin )


module.exports = router