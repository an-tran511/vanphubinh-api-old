import { DateTime } from 'luxon'
import { BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import AppBaseModel from './AppBaseModel'
import Warehouse from './Warehouse'
import { LocationType } from './Enum'

export default class Location extends AppBaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public warehouseId: number

  @belongsTo(() => Warehouse)
  public warehouse: BelongsTo<typeof Warehouse>

  @column()
  public locationType: LocationType

  @column()
  public parentId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
