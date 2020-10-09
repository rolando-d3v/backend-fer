
const productoModel = require('../models/productoModel')

//OBTENER TODOS LOS PRODUCTOS
exports.getProductos = async (req, res) => {
  try {
    let limite = parseInt(req.query.limite || 5);   //limitar cuantos productos se pueden mostrar
    const producto = await productoModel
      .find({ disponible: true })
      .limit(limite)
      .populate("usuario", { password: 0 })
      .populate({
        path: "categoria",
        populate: { path: "usuario" },
      });

    res.json({ ok: true,
         cantidad: producto.length,
         productos: producto,
         });
  } catch (error) {
    res.send(error);
  }
};


//OBTIENE UN SOLO PRODUCTO
exports.getProducto = async (req, res) => {
    try {
        const producto = await productoModel.findById({_id: req.params.idProducto})
        .populate('usuario')
        .populate('categoria')
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
      descripcion: req.body.descripcion,
      categoria: req.body.categoria,
      usuario: req.usuario.id,
    });
    await producto.save();
    res.json({ ok: true, message: "producto create successfully", producto });

  } catch (error) {
    res.send(error);
}
};

//UPDATE UN PRODUCTO
exports.updateProducto = async (req, res) => {
  try {
    const producto = await productoModel.findOneAndUpdate(
      { _id: req.params.idProducto },
      req.body,
      { new: true, runValidators: true }
    );
   
    if (!producto) {
        res.json({message: 'id de producto no found'})
    } else {
        res.json(producto)
    }
  } catch (error) {
    res.send(error);
  }

};

//REMOVE UN PRODUCTO
exports.removeProducto = async (req, res) => {
  try {
    const producto = await productoModel.findOneAndUpdate(
      { _id: req.params.idProducto },
      {disponible: false},
      { new: true }
    );
    if (!producto) {
        res.json({message: 'id no found'})
    }else {
        res.json({ ok: true, message: "producto eliminado successfully" });
    }
  } catch (error) {
    res.json(error);
  }
};