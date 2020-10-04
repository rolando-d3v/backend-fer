const categoriaModel = require('../models/categoriaModel')

//OBTENER  TODAS LAS CATEGORIAS
exports.obtenerCategorias =  async(req, res) =>  {
   try {
       const categoria = await categoriaModel.find({})
       res.json(categoria)
   } catch (error) {
       res.send(error)
   }
}

// OBTENER SOLO UNA CATEGORIA
exports.obtenerCategoria =  async (req, res) =>  {
   try {
    const categoria = await categoriaModel.findById({_id :req.params.idCategoria})
    res.json(categoria)
   } catch (error) {
    res.send(error)
   }
}


//CREAR CATEGORIAS
exports.createCategorias = async (req, res) =>  {
    try {
        const categoria = categoriaModel(req.body)
        res.json({ok: true , message: "categoria creada successfully"})
        await categoria.save()
    } catch (error) {
        res.send(error)
    }
 }


//ACTUALIZAR LAS CATEGORIAS
exports.updateCategorias = async (req, res) =>  {
    try {
        const categoria = categoriaModel(req.body)
        res.json({ok: true , message: "categoria creada successfully"})
        await categoria.save()
    } catch (error) {
        res.send(error)
    }
 }


//ELIMINAR CATEGORIA
exports.removeCategorias = async (req, res) =>  {
    try {
        const categoria = categoriaModel(req.body)
        res.json({ok: true , message: "categoria creada successfully"})
        await categoria.save()
    } catch (error) {
        res.send(error)
    }
 }