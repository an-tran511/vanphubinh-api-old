import { DateTime } from 'luxon'
import { BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import AppBaseModel from './AppBaseModel'
import Partner from './Partner'
import SaleOrderLine from './SaleOrderLine'
import { SaleOrderStatus } from 'App/Models/Enum'

export default class SaleOrder extends AppBaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public customerId: number

  @belongsTo(() => Partner, {
    foreignKey: 'customerId',
  })
  public customer: BelongsTo<typeof Partner>

  @hasMany(() => SaleOrderLine, {
    foreignKey: 'saleOrderId',
  })
  public saleOrderLines: HasMany<typeof SaleOrderLine>

  @column()
  public saleOwnerId: number

  @belongsTo(() => Partner, {
    foreignKey: 'saleOwnerId',
  })
  public saleOwner: BelongsTo<typeof Partner>

  @column()
  public status: SaleOrderStatus

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
