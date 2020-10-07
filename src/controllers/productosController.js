const productoModel = require('../models/productoModel')

//OBTENER TODOS LOS PRODUCTOS
exports.getProductos = async (req, res) => {
  try {
    const producto = await productoModel
      .find({})
      .populate("usuario", { password: 0 });
    res.json(producto);
  } catch (error) {
    res.send(error);
  }
};


//OBTIENE UN SOLO PRODUCTO
exports.getProducto = async (req, res) => {
    try {
        const producto = await productoModel.findById({_id: req.params.idProducto})
        if (!producto) {
            res.json({message: 'el ID no existe'})
        } else {
            res.json(producto)
        }

    } catch (error) {
        res.send(error)
    }
}


//CREA UN PRODUCTO
exports.createProducto = async (req, res) => {
    try {
        const producto = new productoModel({
            nombre: req.body.nombre,
            precioUni: req.body.precioUni,
            disponible: req.body.disponible,
            usuario: req.usuario.id,
            categoria: req.usuario.categoria 
        })
        await producto.save()
        res.json({ok: true, message: 'producto create successfully'})
    } catch (error) {
        res.send(error)
    }
}

//UPDATE UN PRODUCTO
exports.updateProducto = async (req, res) => {
    res.json({ok: 'rolando'})
}

//REMOVE UN PRODUCTO
exports.removeProducto = async (req, res) => {
    res.json({ok: 'rolando'})
}