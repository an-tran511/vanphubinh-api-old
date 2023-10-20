import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'sale_orders'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('customer_id').unsigned().references('partners.id').onDelete('RESTRICT')
      table.integer('sale_owner_id').unsigned().references('users.id').onDelete('RESTRICT')
      table
        .enu('status', ['DRAFT', 'CONFIRMED', 'CANCELLED'], {
          useNative: true,
          enumName: 'sale_order_status',
          existingType: false,
        })
        .defaultTo('DRAFT')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
    this.schema.raw('DROP TYPE IF EXISTS "sale_order_status"')
  }
}
