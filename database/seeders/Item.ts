import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { faker } from '@faker-js/faker/locale/vi'
import Item from 'App/Models/Item'

export default class extends BaseSeeder {
  public static environment = ['development', 'testing']

  public async run() {
    // Write your database queries inside the run method
    const items: object[] = []
    for (let i = 0; i < 10; i++) {
      items.push({
        name: faker.commerce.productName(),
        uomId: 1,
        categoryId: 1,
      })
      items.push({
        name: faker.commerce.productName(),
        uomId: 2,
        categoryId: 2,
      })
      items.push({
        name: faker.commerce.productName(),
        uomId: 3,
        categoryId: 3,
      })
    }
    await Item.createMany(items)
  }
}
