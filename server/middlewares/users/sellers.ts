import type { SellerInput } from '../../models/user/Seller'
import { SellerUseCase } from '../../rules/registerSeller'
import { SellerService } from '../../services/seller/seller'

export const Sellers = async (ctx: Context, next: () => Promise<any>) => {
  const { clients, body } = ctx

  const { vbase } = clients

  const sellerService = new SellerService(vbase)
  const useCase = new SellerUseCase(sellerService)

  useCase.create(body as SellerInput)

  await next()
}
