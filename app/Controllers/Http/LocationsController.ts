import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Location from 'App/Models/Location'

export default class LocationsController {
  public async index({ response }: HttpContextContract) {
    const locations = await Location.query()
    return response.ok(locations)
  }
}
