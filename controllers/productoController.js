// cuatro funciones para manejar operaciones CRUD relacionadas con un modelo llamado "Productos".
const Productos = require("../model/Productos");

// Mostrar
module.exports.mostrar = (req, res) => {
  Productos.find({})
    .then((productos) => {
      console.log(productos);
       res.render('index', { productos: productos }); // Renderizar la vista index con los datos de los productos
    })
    .catch((error) => {
      console.error(error);// estado 500 con un mensaje que indica el error.
      res.status(500).json({
        message: "Error mostrando productos",
      });
    });
};

//Crear
module.exports.crear = async (req, res) => {
  const producto = new Productos({
    NombreProducto: req.body.NombreProducto,
    Precio: req.body.Precio,
    Cantidad: req.body.Cantidad,
    Categoria: req.body.Categoria
  });

  try {
    await producto.save();
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error al crear El Producto"
    });
  }
};
//Editar
module.exports.editar = async (req, res) => {//La función extrae los datos actualizados del cuerpo de la solicitud y utiliza el ID proporcionado en la solicitud 
  const id = req.body.id_editar
  const NombreProducto = req.body.NombreProducto_editar
  const Precio = req.body.Precio_editar
  const Cantidad = req.body.Cantidad_editar
  const Categoria = req.body.Categoria_editar

  try {
    const updatedProduct = await Productos.findByIdAndUpdate(id, {NombreProducto, Precio, Cantidad, Categoria}, { new: true })
    res.redirect('/')
  } catch (error) {
    return res.status(500).json({
      message: 'Error al actualizar el producto'
    })
  }
}

//Eliminar
module.exports.borrar = async (req, res) => {//La función utiliza el ID proporcionado en la solicitud para buscar y eliminar el producto correspondiente de la base de datos.
  const id = req.params.id;
  try {
    await Productos.findByIdAndDelete(id);
    res.redirect('/');
  } catch (error) {
    return res.status(500).json({
      message: 'Error al eliminar el producto'
    });
  }
};








