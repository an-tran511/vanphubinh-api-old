import { DateTime } from 'luxon'
import { column } from '@ioc:Adonis/Lucid/Orm'
import AppBaseModel from './AppBaseModel'

export default class Partner extends AppBaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public phone: string

  @column()
  public address: string

  @column()
  public isCustomer: boolean

  @column()
  public isSupplier: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
