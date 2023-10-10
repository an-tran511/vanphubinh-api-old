import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Category from 'App/Models/Category'

export default class extends BaseSeeder {
  public static environment = ['development', 'production']

  public async run() {
    await Category.createMany([
      {
        id: 1,
        name: 'Màng đôi',
      },
      {
        id: 2,
        name: 'Màng đơn',
      },
      {
        id: 3,
        name: 'Màng in',
        parentCategoryId: 1,
      },
      {
        id: 4,
        name: 'Lốc',
        parentCategoryId: 1,
      },
      {
        id: 5,
        name: 'Áo bình',
        parentCategoryId: 1,
      },
      {
        id: 6,
        name: 'Áo bình trắng',
        parentCategoryId: 5,
      },
      {
        id: 7,
        name: 'Áo bình xanh',
        parentCategoryId: 5,
      },
    ])
  }
}
