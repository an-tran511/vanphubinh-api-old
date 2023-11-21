import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Category from 'App/Models/Category'

export default class extends BaseSeeder {
  public static environment = ['development', 'production']

  public async run() {
    await Category.createMany([
      {
        id: 1,
        name: 'Nhãn co',
      },
      {
        id: 2,
        name: 'Lốc',
      },
      {
        id: 3,
        name: 'Áo bình trắng',
      },
      {
        id: 4,
        name: 'Áo bình xanh',
      },
    ])
  }
}
