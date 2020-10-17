//ENDPOINT PARA SUBIR FILES AL SERVER
exports.fileUpload = (req, res) => {
    if(!req.files) {
        res.json({ok: false, message: 'no se ha seleccionado ningun file'})
    }

    let dataFile = req.files.archivo
    let nombreCortado = dataFile.name.split('.')
    console.log(nombreCortado);

    return

    //extensiones permitidas
    let extensionesValidas = ['jpg', 'png', 'jpeg', 'gif']

    dataFile.mv('uploads/image.jpg', (error)=> {
        if (error) {
            res.json({ok: false, error})
        } else {
            res.json({
                ok: true, message: 'file create successfully'
            })
        }
    })

} 