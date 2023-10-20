import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateSaleOrderValidator from 'App/Validators/CreateSaleOrderValidator'
import SaleOrder from 'App/Models/SaleOrder'
import Database from '@ioc:Adonis/Lucid/Database'
import { SaleOrderStatus } from 'App/Models/Enum'

export default class SaleOrdersController {
  public async store({ request, response }: HttpContextContract) {
    await Database.transaction(
      async (trx) =>
        await trx.transaction(async () => {
          const payload = await request.validate(CreateSaleOrderValidator)
          console.log(payload)
          const saleOrder = await SaleOrder.create(
            {
              customerId: payload.customerId,
              status: payload.shouldConfirm ? SaleOrderStatus.CONFIRMED : SaleOrderStatus.DRAFT,
            },
            { client: trx }
          )
          await saleOrder
            .related('saleOrderLines')
            .createMany(payload.saleOrderLines, { client: trx })
          return saleOrder
        })
    )
      .then((saleOrder) => {
        return response.created(saleOrder)
      })
      .catch((error) => {
        console.log(error)
        return response.abort({ message: error.message })
      })
  }
}
