const { populate } = require("../models/categoriaModel");
const categoriaModel = require("../models/categoriaModel");

//OBTENER  TODAS LAS CATEGORIAS
exports.obtenerCategorias = async (req, res) => {
  try {
    const categoria = await categoriaModel
      .find({})
      .populate("usuario", { password: 0 });
    res.json(categoria);
  } catch (error) {
    res.send(error);
  }
};

// OBTENER SOLO UNA CATEGORIA
exports.obtenerCategoria = async (req, res) => {
  try {
    const categoria = await categoriaModel.findById({
      _id: req.params.idCategoria
    }).populate('usuario', {password: 0})
    
    if(!categoria) {
      res.json({ok: false, message: 'ID  categoria no existe'});
    } else {
      res.json(categoria);
    }

  } catch (error) {
    res.send(error);
  }
};

//CREAR CATEGORIAS
exports.createCategorias = async (req, res) => {
  try {
    const categoria = new categoriaModel({
      descripcion: req.body.descripcion,
      usuario: req.usuario.id,
    });

    res.json({
      ok: true,
      message: "categoria creada successfully",
      usuario: req.usuario,
    });
    await categoria.save();
  } catch (error) {
    res.send(error);
  }
};

//ACTUALIZAR LAS CATEGORIAS
exports.updateCategorias = async (req, res) => {
  try {
    const categoria = await categoriaModel.findOneAndUpdate(
      { _id: req.params.idCategoria },
      { descripcion: req.body.descripcion },
      { new: true, runValidators: true }
    );
    res.json(categoria);
  } catch (error) {
    res.send(error);
  }
};

//ELIMINAR CATEGORIA
exports.removeCategorias = async (req, res) => {
  try {
    const categoria = await categoriaModel.findOneAndRemove({
      _id: req.params.idCategoria,
    });

    if (!categoria) {
      res.status(400).json({ ok: false, message: "categoria no existe" });
    } else {
      res.status(200).json({ ok: true, message: "categoria delete successfully" });
    }
    
  } catch (error) {
    res.send(error);
  }
};

console.log();
