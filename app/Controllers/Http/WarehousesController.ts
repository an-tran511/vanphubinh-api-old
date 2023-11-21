import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Warehouse from 'App/Models/Warehouse'

export default class WarehousesController {
  public async index({ request, response }: HttpContextContract) {
    const warehouses = await Warehouse.query()
    return response.ok(warehouses)
  }
}
