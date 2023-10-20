import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'sale_order_lines'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('sale_order_id').unsigned().references('sale_orders.id').onDelete('CASCADE')
      table.integer('item_id').unsigned().references('items.id').onDelete('RESTRICT')
      table.decimal('quantity', 10, 2)
      table.decimal('unit_price', 10, 2)
      table.decimal('tax_rate')
      table.string('note').nullable()
      table.date('delivery_date').nullable()

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
