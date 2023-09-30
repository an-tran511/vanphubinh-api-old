import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'items'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('code')
      table.integer('category_id').unsigned().references('categories.id').onDelete('RESTRICT')
      table.integer('uom_id').unsigned().references('uoms.id').onDelete('RESTRICT')
      table.integer('secondary_uom_id').unsigned().references('uoms.id').onDelete('RESTRICT')
      table.integer('purchase_uom_id').unsigned().references('uoms.id').onDelete('RESTRICT')
      table.integer('parter_id').unsigned().references('partners.id').onDelete('RESTRICT')
      table.boolean('is_stockable').defaultTo(true)
      table.boolean('is_purchasable').defaultTo(true)
      table.boolean('is_sellable').defaultTo(true)
      table.boolean('is_printable').defaultTo(false)
      table.jsonb('specifications').defaultTo('{}')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
