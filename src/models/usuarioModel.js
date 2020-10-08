const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt');
const _ = require('underscore')


//poner valores validos para el role
const rolesValidos = {
  values: ["ADMIN_ROLE", "USER_ROLE"],
  message: "{VALUE} no es un rol valido ",
};

//ESQUEMA DE USUARIO
const usuarioSchema = new Schema(
  {
    nombre: {
      type: String,
      trim: true,
      required: [true, "el nombre es necesario"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "el email es necesario"],
    },
    password: {
      type: String,
      required: [true, "el password es incorrecto"],
    },
    img: {
      type: String,
    },
    role: {
      type: String,
      default: "USER_ROLE",
      enum: rolesValidos,
    },
    estado: {
      type: Boolean,
      default: true,
    },
    google: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);


//FUNCION PARA NO MOSTRAR EL PASSWORD EN EL JSON DEL BACK-END
usuarioSchema.methods.toJSON = function() {
  let user = this;
  let userObject = user.toObject();
  delete userObject.password;

  return userObject;
}


// ENCRIPTAR PASSWORD
usuarioSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)  // genSalt cuanta veces se realiza el cifrado
    return  bcrypt.hash(password, salt)  // hash se encarga de cifrar el string a un cripto
}

module.exports = model("Usuario", usuarioSchema);
