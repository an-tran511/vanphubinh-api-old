import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'locations'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table
        .integer('warehouse_id')
        .unsigned()
        .references('warehouses.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
      table
        .integer('parent_id')
        .unsigned()
        .references('locations.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
      table.enum('location_type', [
        'INTERNAL',
        'VENDOR',
        'CUSTOMER',
        'INVENTORY_LOSS',
        'PRODUCTION',
        'TRANSIT',
        'VIEW',
        'ASSET_ALLOCATION',
      ])

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
