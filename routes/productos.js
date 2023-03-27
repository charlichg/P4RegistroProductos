const { Router } = require('express')
const  express = require('express')
const router = express.Router()

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

