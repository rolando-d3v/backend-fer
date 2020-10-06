const categoriaModel = require("../models/categoriaModel");

//OBTENER  TODAS LAS CATEGORIAS
exports.obtenerCategorias = async (req, res) => {
  try {
    const categoria = await categoriaModel.find({});
    res.json(categoria);
  } catch (error) {
    res.send(error);
  }
};

// OBTENER SOLO UNA CATEGORIA
exports.obtenerCategoria = async (req, res) => {
  try {
    const categoria = await categoriaModel.findById({
      _id: req.params.idCategoria,
    });
    res.json(categoria);
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
    res.json({ ok: true, message: "categoria creada successfully" });
  } catch (error) {
    res.send(error);
  }
};


console.log();