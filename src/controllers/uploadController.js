
exports.fileUpload = (req, res) => {
    if(!req.file) {
        res.json({ok: false, message: 'file no encontrado'})
    }
} 