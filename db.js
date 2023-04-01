// Aqui se establece la conexión con la base de datos MongoDB usando Mongoose. 
const mongoose = require('mongoose')
const url = "mongodb+srv://charlichg:By6HwmutMogf6MLX@cluster0.am61anf.mongodb.net/RegistroProductos?retryWrites=true&w=majority"
require('dotenv').config({path:'variables.env'})

mongoose.connect(process.env.DB_URI, {// se llama al método connect() de Mongoose, que toma la URL y algunas opciones de configuración. 
useNewUrlParser: true,
useUnifiedTopology: true,
//useFindAndModify: false,
//useCreateIndex: true

})

const db = mongoose.connection
db.on('error',console. error.bind ( console, 'Error al conectar MongoDB'))
db.once( 'open', function callback() {
    console.log("¡Conectado a MongoDB!")

})

module.exports = db