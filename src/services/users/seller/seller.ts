import { object, string, ZodError } from 'zod'
import type { SellerInput } from 'models/user/Seller'
import {
  nitValidation,
  passwordValidation,
  companyNameValidation,
} from 'helpers/dataValidators'
import { parseErrorMessage } from 'helpers/parseError'

import type { SellerService as SellerInterface } from './types'

const SellerSchema = object({
  email: string().email().min(8).max(32),
  nit: string().min(8).superRefine(nitValidation),
  password: string().min(12).superRefine(passwordValidation),
  companyName: string().min(8).superRefine(companyNameValidation),
})

export class SellerService implements SellerInterface {
  constructor(private client: unknown) {}

  public async create(data: SellerInput) {
    try {
      if (!data) return 'Data is required'

      const parsedData = await SellerSchema.parseAsync(data)

      const { nit, email, companyName } = parsedData
      const documentId = `S-${nit}`

      const documentStructure = {
        dataEntity: 'idP-users',
        fields: {
          nit,
          email,
          companyName,
          id: documentId,
        },
        schemma: 'sellers',
      }

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
