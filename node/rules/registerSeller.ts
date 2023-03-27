import type { SellerInput } from '../models/user/Seller'
import type { SellerService } from '../services/seller/types'

export class SellerUseCase {
  constructor(private service: SellerService) {}
  public async create(data: SellerInput) {
    await this.service.create(data)
  }
}
