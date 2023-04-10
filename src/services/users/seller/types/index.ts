import type { SellerInput } from '../../../models/user/Seller'

export interface SellerService {
  create: (data: SellerInput) => Promise<string>
}
