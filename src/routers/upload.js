const {Router} = require('express')

const {fileUpload} = require('../controllers/uploadController')

const router = Router()
router.put('/upload' , fileUpload)

module.exports = router