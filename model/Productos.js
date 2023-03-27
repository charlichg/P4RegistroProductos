const mongoose = require( 'mongoose')
const Schema = mongoose.Schema


const productosSchema = new Schema ({
    
NombreProducto: String,
Precio: Number,
Cantidad: Number,
Categoria: String


}, {versionKey:false})

module.exports = mongoose.model('Productos',productosSchema)



