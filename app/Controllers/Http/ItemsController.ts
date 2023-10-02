import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Item from 'App/Models/Item'

export default class ItemsController {
  public async index({ request }: HttpContextContract) {
    const { _page: page, _perPage: perPage } = request.qs()
    console.log(perPage)
    const items = await Item.query()
      .preload('uom')
      .preload('secondaryUom')
      .preload('purchaseUom')
      .paginate(page, perPage)
    return items
  }
}
