import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Item from 'App/Models/Item'

export default class ItemsController {
  public async index({ request }: HttpContextContract) {
    const { page, perPage, searchValue } = request.qs()
    const items = await Item.query()
      .withScopes((query) => {
        query.search(searchValue)
      })
      .preload('uom')
      .preload('secondaryUom')
      .preload('purchaseUom')
      .paginate(page, perPage)
    return items
  }
}
