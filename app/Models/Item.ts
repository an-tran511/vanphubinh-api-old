import { DateTime } from 'luxon'
import { column } from '@ioc:Adonis/Lucid/Orm'
import AppBaseModel from './AppBaseModel'

export default class Item extends AppBaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public categoryId: number

  @column()
  public partnerId: number

  @column()
  public uomId: number

  @column()
  public secondaryUomId: number

  @column()
  public purchaseUomId: number

  @column()
  public isStockable: boolean

  @column()
  public isPurchasable: boolean

  @column()
  public isSellable: boolean

  @column()
  public isPrintable: boolean

  @column()
  public specifications: object

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
