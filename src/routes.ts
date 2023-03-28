import {Router} from 'express'
import healthCheckController from './controller/healthCheckController'
import userController from './controller/userController'
import user from './controller/userController'
import productController from './controller/productController'
import productService from './productService'

const routes = Router()

routes.get('/', healthCheckController.check)
routes.get('/users', userController.find)
routes.post('/products', productController.create)
routes.get('/products', productController.lerArquivo)
routes.get('/products-stock', productController.stock)
routes.get('/products-stock-value', productController.stockValue)


export default routes