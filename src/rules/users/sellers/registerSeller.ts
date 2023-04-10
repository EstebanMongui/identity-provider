import type { SellerInput } from 'models/user/Seller'
import type { SellerService } from 'services/users/seller/seller'

export class SellerUseCase {
  constructor(private service: SellerService) {}
  public async create(data: SellerInput) {
    await this.service.create(data)
  }
}
