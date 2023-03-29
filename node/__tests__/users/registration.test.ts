import type { SellerInput } from '../../models/user/Seller'
import { SellerUseCase } from '../../rules/registerSeller'
import { SellerService } from '../../services/seller/seller'

const data = {
  email: 'testcompany@mail.com',
  nit: '45686734',
  password: 'Company_786_DummyPass',
  companyName: 'Test Company 1',
}

describe('Users registration', () => {
  describe('registration data is wrong', () => {
    const service = new SellerService()
    const seller = new SellerUseCase(service)

    describe('[email] is wrong', () => {
      it('throw error when [email] is null', async () => {
        const _data: SellerInput = { ...data }
        const error = `email is a required value`

        delete _data.email

        await expect(seller.create(_data)).rejects.toThrow(error)
      })

      it("throw error when [email] doesn't have a valid format", async () => {
        const _data: SellerInput = { ...data, email: 'fakeEmail.test' }

        const error = `email has a wrong format`

        await expect(seller.create(_data)).rejects.toThrow(error)
      })
      xit('throw error when [email] already exists, it must be unique', async () => {
        const _data: SellerInput = { ...data, email: 'existent@email.com' }

        const error = `email ${_data.email} already exists`

        await expect(seller.create(_data)).rejects.toThrow(error)
      })
      it('throw error when [email] is not long enough', async () => {
        const _data: SellerInput = { ...data, email: 'e@m.co' }
        const minimum = '8'
        const error = `email must have at less ${minimum} characters`

        await expect(seller.create(_data)).rejects.toThrow(error)
      })
    })

    describe('[NIT] is wrong', () => {
      it('throw error when [NIT] is null', async () => {
        const _data: SellerInput = { ...data }
        const error = `nit is a required value`

        delete _data.nit

        await expect(seller.create(_data)).rejects.toThrow(error)
      })
      it('throw error when [NIT] has non-numeric characters', async () => {
        const _data: SellerInput = { ...data, nit: '2314.?34' }
        const error = `nit can not contain special characters`

        await expect(seller.create(_data)).rejects.toThrow(error)
      })
      xit('throw error when [NIT] already exists, it must be unique', async () => {
        const _data: SellerInput = data

        const error = `nit ${_data.nit} already exists`

        await expect(seller.create(_data)).rejects.toThrow(error)
      })
      it('throw error when [NIT] is not long enough', async () => {
        const _data: SellerInput = { ...data, nit: '1452' }
        const minimum = 8
        const error = `nit must have at less ${minimum} characters`

        await expect(seller.create(_data)).rejects.toThrow(error)
      })
    })

    describe('[password] is wrong', () => {
      xit('throw error when [passwor] is null', () => {})
      xit("throw error when [password] doesn't have at less 3 numbers", () => {})
      xit("throw error when [password] doesn't have at less 3 capital letters", () => {})
      xit("throw error when [password] doesn't have at less 2 non-alphanumeric characters", () => {})
      xit('throw error when [password] is not long enough, it must have at less 12 characters', () => {})
    })

    describe('[companyName] is wrong, but other inputs are valid', () => {
      xit('throw error when [companyName] is null', () => {})
      xit("throw error when [companyName] has non-alphanumeric characters, exept for the 'space' character", () => {})
      xit('throw error when [companyName] is not long enough, it must have at less 8 characters', () => {})
    })
  })

  describe('registration data is valid, but registration process fails', () => {
    xit('returns an internal server error', () => {})
  })

  describe('registion data is valid and process is successful', () => {
    xit('returns a sucess message', () => {})
  })
})
