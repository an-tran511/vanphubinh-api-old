import { DateTime } from 'luxon'
import { BelongsTo, HasMany, belongsTo, column, computed, hasMany } from '@ioc:Adonis/Lucid/Orm'
import AppBaseModel from './AppBaseModel'
import Partner from './Partner'
import SalesOrderLine from 'App/Models/SalesOrderLine'
import { SalesOrderStatus } from 'App/Models/Enum'
import { search } from 'App/Utils/search'

export default class SalesOrder extends AppBaseModel {
  public static search = search(this, ['id'])

  @column({ isPrimary: true })
  public id: number

  @computed()
  public get name() {
    return `S${this.id}`
  }

  @column()
  public customerId: number

  @belongsTo(() => Partner, {
    foreignKey: 'customerId',
  })
  public customer: BelongsTo<typeof Partner>

  @hasMany(() => SalesOrderLine, {
    foreignKey: 'salesOrderId',
  })
  public salesOrderLines: HasMany<typeof SalesOrderLine>

  @column()
  public salesOwnerId: number

  @belongsTo(() => Partner, {
    foreignKey: 'salesOwnerId',
  })
  public salesOwner: BelongsTo<typeof Partner>

  @column()
  public status: SalesOrderStatus

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
