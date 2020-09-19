const {Router} = require('express');
const {verificaToken} = require('../middlewares/auth');

const router = Router()
const {postLogin} = require('../controllers/LoginController')

router.post('/login',postLogin )


module.exports = router