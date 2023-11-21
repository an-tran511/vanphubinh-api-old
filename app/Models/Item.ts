import { DateTime } from 'luxon'
import { BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import AppBaseModel from 'App/Models/AppBaseModel'
import Uom from 'App/Models/Uom'
import { search } from 'App/Utils/search'

export default class Item extends AppBaseModel {
  public static search = search(this, ['name'])

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

  @belongsTo(() => Uom)
  public uom: BelongsTo<typeof Uom>

  @column()
  public secondaryUomId?: number

  @belongsTo(() => Uom)
  public secondaryUom: BelongsTo<typeof Uom>

  @column()
  public purchaseUomId?: number

  @belongsTo(() => Uom)
  public purchaseUom: BelongsTo<typeof Uom>

  @column()
  public isStockable?: boolean

  @column()
  public isPurchasable?: boolean

  @column()
  public isSellable?: boolean

  @column()
  public hasPrinting?: boolean

  @column()
  public specifications?: object

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
