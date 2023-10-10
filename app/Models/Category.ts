import { DateTime } from 'luxon'
import { BelongsTo, belongsTo, column, computed } from '@ioc:Adonis/Lucid/Orm'
import AppBaseModel from './AppBaseModel'

export default class Category extends AppBaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @computed()
  public get fullName(): string {
    return this.parentCategory ? `${this.parentCategory.fullName} / ${this.name}` : this.name
  }

  @column()
  public parentCategoryId: number

  @belongsTo(() => Category, {
    foreignKey: 'parentCategoryId',
  })
  public parentCategory: BelongsTo<typeof Category>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
