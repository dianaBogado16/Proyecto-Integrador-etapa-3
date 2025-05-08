import express from 'express'
import productosController from '../controllers/productos.controller.js'
//  constantes
const routerProductos= express.Router()


//! CRUD PRODUCTOS
// CRUD -> R: READ ALL -> GET ALL-> http://localhost:8080/api/v1/productos
routerProductos.get('/', productosController.getAll )

// CRUD -> R: READ ALL -> GET ONE-> http://localhost:8080/api/v1/productos/id
routerProductos.get('/:id', productosController.getOne)


// CRUD -> C: CREATE -> POST-> http://localhost:8080/api/v1/productos + productosACrear
routerProductos.post('/', productosController.create )
  
// CRUD -> U: UPDATE -> PUT -> http://localhost:8080/api/v1/productos/id + productoAEditar
routerProductos.put('/:id',productosController.update)
  
// CRUD -> D:DELETE -> DELETE -> http://localhost:8080/api/v1/productos/id
routerProductos.delete('/:id', productosController.remove)

export default routerProductos