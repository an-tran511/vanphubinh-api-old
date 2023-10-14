import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Partner from 'App/Models/Partner'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class PartnersController {
  public async index({ request }: HttpContextContract) {
    const { _page: page, _perPage: perPage } = request.qs()
    const items = await Partner.query().paginate(page, perPage)
    return items
  }

  public async store({ request }: HttpContextContract) {
    const newItemSchema = schema.create({
      name: schema.string(),
      isCustomer: schema.boolean(),
      isSupplier: schema.boolean(),
    })
    const payload = await request.validate({
      schema: newItemSchema,
    })
    const item = await Partner.create(payload)
    return item
  }
}
