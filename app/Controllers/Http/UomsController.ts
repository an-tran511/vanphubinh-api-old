import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Uom from 'App/Models/Uom'

export default class UomsController {
  public async index({ request, response }: HttpContextContract) {
    const items = await Uom.query()
    return response.ok(items)
  }
}
