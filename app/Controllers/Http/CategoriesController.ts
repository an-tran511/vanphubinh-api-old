import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'

export default class CategoriesController {
  public async index({}: HttpContextContract) {
    const categories = await Category.query().preload('parentCategory', (query) => {
      query.preload('parentCategory', (query) => {
        query.preload('parentCategory', (query) => {
          query.preload('parentCategory', (query) => {
            query.preload('parentCategory')
          })
        })
      })
    })
    return categories
  }
}
