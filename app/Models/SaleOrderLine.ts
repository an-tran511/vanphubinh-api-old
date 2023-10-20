import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Item from './Item'

export default class SaleOrderLine extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public saleOrderId: number

  @column()
  public itemId: number

  @belongsTo(() => Item)
  public item: BelongsTo<typeof Item>

  @column()
  public quantity: number

  @column()
  public unitPrice: number

  @column()
  public taxRate: number

  @column()
  public note: string

  @column()
  public deliveryDate: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
