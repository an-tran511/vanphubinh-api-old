import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Category from 'App/Models/Category'

export default class extends BaseSeeder {
  public static environment = ['development', 'production']

  public async run() {
    await Category.createMany([
      {
        name: 'Nhãn',
      },
      {
        name: 'Lốc',
      },
      {
        name: 'Áo bình',
      },
      {
        name: 'Trục',
      },
    ])
  }
}
