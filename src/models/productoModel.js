const { Schema, model } = require("mongoose");

const productoSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "el nombre es necesario para poder seguir"],
  },
  precioUni: {
    type: Number,
    required: [true, "el precio unitario es requerido"],
  },
  descripcion: { type: String },
  disponible: { type: Boolean, required: true, default: true },
  categoria: { type: Schema.Types.ObjectId, ref: "Categoria" },
  usuario: { type: Schema.Types.ObjectId, ref: "Usuario" },
});

module.exports = model("Producto", productoSchema);
