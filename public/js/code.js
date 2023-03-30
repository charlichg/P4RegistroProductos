
                       

const modalproducto = new bootstrap.Modal(document.getElementById('modalproducto'))

const on = (element, event, selector, handler) => {
    element.addEventListener (event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

           
on(document,'click','.btnEditar', e =>{
    const fila = e.target.parentNode.parentNode
    id_editar.value = fila.children[0].innerHTML
    NombreProducto_editar.value = fila.children[1].innerHTML
    Precio_editar.value = fila.children[2].innerHTML
    Cantidad_editar.value = fila.children[3].innerHTML
    Categoria_editar.value = fila.children[4].innerHTML
    modalproducto.show()
})