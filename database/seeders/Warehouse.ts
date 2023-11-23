import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { LocationType } from 'App/Models/Enum'
import Warehouse from 'App/Models/Warehouse'

export default class extends BaseSeeder {
  public static environment = ['development', 'production']

  public async run() {
    // Write your database queries inside the run method
    const defaultWarehouse = await Warehouse.create({
      name: 'Kho mặc định',
    })
    const viewLocation = await defaultWarehouse.related('locations').create({
      name: defaultWarehouse.name,
      locationType: LocationType.VIEW,
    })

    await defaultWarehouse.related('locations').create({
      name: 'Tồn kho',
      locationType: LocationType.INTERNAL,
      parentId: viewLocation.id,
    })
  }
}
