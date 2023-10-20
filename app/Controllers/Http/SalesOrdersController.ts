import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateSalesOrderValidator from 'App/Validators/CreateSalesOrderValidator'
import SalesOrder from 'App/Models/SalesOrder'
import Database from '@ioc:Adonis/Lucid/Database'
import { SalesOrderStatus } from 'App/Models/Enum'

export default class SalesOrdersController {
  public async store({ request, response }: HttpContextContract) {
    await Database.transaction(
      async (trx) =>
        await trx.transaction(async () => {
          const payload = await request.validate(CreateSalesOrderValidator)

          const salesOrder = await SalesOrder.create(
            {
              customerId: payload.customerId,
              status: payload.shouldConfirm ? SalesOrderStatus.CONFIRMED : SalesOrderStatus.DRAFT,
            },
            { client: trx }
          )
          await salesOrder
            .related('salesOrderLines')
            .createMany(payload.salesOrderLines, { client: trx })
          return salesOrder
        })
    )
      .then((salesOrder) => {
        return response.created(salesOrder)
      })
      .catch((error) => {
        return response.abort({ message: error.message })
      })
  }
}
