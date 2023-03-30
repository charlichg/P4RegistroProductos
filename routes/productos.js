//Aqui se define un router de Express para manejar las solicitudes de productos.
const { Router } = require('express')
const  express = require('express')
const router = express.Router()
//definen cuatro rutas para manejar las solicitudes HTTP GET y POST:
const productocontrollers = require('../controllers/productoController')

// Mostar todos los Productos (Get)

router.get('/', productocontrollers.mostrar)

//Crear producto (POST)
router.post('/crear',productocontrollers.crear)

//Editar productos (POST)
router.post('/editar',productocontrollers.editar)

//Eliminar productos (GET)
router.get('/borrar/:id', productocontrollers.borrar)

module.exports = router

