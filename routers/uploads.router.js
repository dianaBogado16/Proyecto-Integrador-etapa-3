import express from 'express'
const routerUpload = express.Router()
import controller from '../controllers/uploads.controller.js'
import uploadsMiddleware from '../middlewares/uploads.middleware.js'


/* POST -> request que guardan la imagen en una carpeta */
// la key para el postman es 'imagen'
routerUpload.post('/', uploadsMiddleware.single('imagen') ,controller.uploadImagen)

export default routerUpload
