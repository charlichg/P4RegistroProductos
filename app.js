//aplicación web que utiliza Node.js, Express y MongoDB para crear una lista de productos.
const express = require('express')
const app = express()

const db = require('./db')

app.set('view engine','pug')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('public'))

const productos = require('./routes/productos')
app.use(productos)

app.get('/',(req, res)=>{
    res.send('hola mundo')
})

app.listen(3000,() => {//se inicia escuchando en el puerto 3000.
    console.log('¡Server UP!  en http://localhost:3000')



})