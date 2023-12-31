/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'
import Env from '@ioc:Adonis/Core/Env'

Route.group(() => {
  Route.resource('/items', 'ItemsController').apiOnly()
  Route.resource('/categories', 'CategoriesController').apiOnly()
  Route.resource('/partners', 'PartnersController').apiOnly()
  Route.resource('/sales-orders', 'SalesOrdersController').apiOnly()
  Route.resource('/uoms', 'UomsController').apiOnly()
  Route.resource('/warehouses', 'WarehousesController').apiOnly()
  Route.resource('/locations', 'LocationsController').apiOnly()

  Route.group(() => {
    Route.post('/register', 'AuthController.register')
    Route.post('/login', 'AuthController.login')
    Route.get('/logout', 'AuthController.logout')
    Route.get('/', 'AuthController.index')
  }).prefix('/auth')
}).prefix('/api')

Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()

  return report.healthy ? response.ok(report) : response.badRequest(report)
})

if (Env.get('IPX_ENABLED')) Route.get('/image/*', 'ImagesController.index')
