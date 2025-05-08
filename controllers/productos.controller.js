import { model } from 'mongoose'
import models from '../models/productos.model.js'


const getAll = async(req, res) => {
    try {
        const productos = await models.obtenerTodosLosProductos()
        res.json    (productos)
        
    } catch (error) {
        console.log(error);
    }
}


const getOne = async (req, res) => {
    const id = req.params.id
    try {
        const producto = await models.obtenerUnPoducto(id)
        res.json(producto)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'No se pudo obtener el producto solicitado'})
    }
}

const create= async (req,res) => {
    const productoACrear = req.body
    try {
        const productoGuardado= await models.crearUnProducto(productoACrear)    
        res.json(productoGuardado)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({mensaje: 'Algo fallo, no se pudo guardar '})
    }

}

const update = async (req,res) => {
    const id = req.params.id
    const productoAEditar = req.body
    productoAEditar.id = id 
    try {
        const productoEditado = await models.editarUnProducto(productoAEditar)
        res.status(201).json(productoEditado) //recordar poner status 201 ya que si no se pone anda eso devolvera status 200 y no es del todo correcto
        
    } catch (error) {
        console.log(error);
        res.status(500).json({mensaje: 'No se pudo editar el producto solicitado'})
    }
} 


const remove = async (req, res) => {
    const id = req.params.id

    try {
        const productoEliminado = await models.eliminarProducto(id)
        res.json(productoEliminado)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({mensaje: ' No se pudo eliminar el producto '})
    }
}

export default {
    getAll,
    getOne,
    create,
    update,
    remove
}