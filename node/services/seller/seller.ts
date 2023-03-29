import { object, string, ZodError } from 'zod'

import type { SellerInput } from '../../models/user/Seller'
import type { SellerService as SellerInterface } from './types'
import {
  nitValidation,
  passwordValidation,
  companyNameValidation,
} from '../../helpers/dataValidators'
import { parseErrorMessage } from '../../helpers/parseError'

const SellerSchema = object({
  email: string().email().min(8).max(32),
  nit: string().min(8).superRefine(nitValidation),
  password: string().min(12).superRefine(passwordValidation),
  companyName: string().min(8).superRefine(companyNameValidation),
})

export class SellerService implements SellerInterface {
  public async create(data: SellerInput) {
    try {
      if (!data) return 'Data is required'
      await SellerSchema.parseAsync(data)

      return 'created'
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessage = parseErrorMessage(error)

        throw new Error(errorMessage)
      }

      if ('message' in error) throw new Error(error.message)
      throw new Error('Undefinded error')
    }
  }
}
