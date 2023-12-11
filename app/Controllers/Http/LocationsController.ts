import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class LocationsController {
  public async index({ response }: HttpContextContract) {
    const locations = await Database.rawQuery(
      `WITH RECURSIVE locations_cte(id, name, parent, ancestors) AS (
          SELECT
            locations.id,
            locations.name,
            locations.parent_id,
            ARRAY [locations.name]
              FROM locations
              WHERE locations.parent_id IS NULL
          UNION ALL
          SELECT
            locations.id,
            locations.name,
            locations.parent_id,
            array_append(locations_cte.ancestors, locations.name)
              FROM locations_cte,
                  locations
              WHERE locations.parent_id = locations_cte.id
      )
      SELECT locations_cte.id, locations_cte.name, array_to_string(locations_cte.ancestors, ' / ') as "fullPathName", locations.location_type as "locationType"
      FROM locations_cte JOIN locations ON locations.id = locations_cte.id;`
    )

    return response.ok(locations?.rows)
  }
}
