export type SellerData = {
  email: string
  nit: number
  password: string
  companyName: string
}

export type SellerInput = {
  email: string | undefined
  nit?: number | string | undefined
  password: string | undefined
  companyName: string | undefined
}
