import db from "../database/db.js";
//Importamos Sequilize
import {  DataTypes } from "sequelize";

const ContactoModel = db.define('contacto',{
    id :  { type: DataTypes.NUMBER,  primaryKey: true } , 
    nombre: { type: DataTypes.STRING },
    telefono: { type: DataTypes.NUMBER },
    correo:{ type: DataTypes.STRING },
    mensaje:{ type: DataTypes.STRING },

},{
    timestamps: false
});

export default ContactoModel