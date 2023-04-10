import { ZodIssueCode } from 'zod'

type ZodContext = { addIssue: (error: any) => void }
type PasswordValidations = {
  [key: string]: string | boolean
}

export const nitValidation = (val: string, ctx: ZodContext) => {
  if (!val) {
    ctx.addIssue({
      code: ZodIssueCode.invalid_type,
      path: ['nit'],
      message: '',
      expected: 'string',
      recived: undefined,
    })
  }

  const isNotNumber = val.match(/[^\d]/)

  if (isNotNumber) {
    ctx.addIssue({
      code: 'custom',
      message: 'nit can not contain special characters',
    })
  }
}

export const companyNameValidation = (val: string, ctx: ZodContext) => {
  if (!val) return undefined

  const regex = /[^\w\n\s_]/g

  if (val.match(regex)?.length) {
    return ctx.addIssue({
      code: 'custom',
      message: `companyName only must contain alphanumeric characters`,
    })
  }
}

export const passwordValidation = (val: string, ctx: ZodContext): void => {
  if (!val) return undefined
  const minNumbers = 3
  const minCapitalLetters = 3
  const minNonAlphaNumeric = 2

  const lengthValidation = (regex: RegExp, minLength: number) => {
    const validation = val.match(regex)

    if (!validation) return false
    if (validation.length < minLength) return false

    return true
  }

  const regexValidations: PasswordValidations = {
    numericCharacters: lengthValidation(/[\d]/g, minNumbers),
    upperCharacters: lengthValidation(/[A-Z]/g, minCapitalLetters),
    specialCharacters: lengthValidation(/[^a-zA-Z\d\n]/g, minNonAlphaNumeric),
  }

  const errorMessages: PasswordValidations = {
    numericCharacters: `password must have at less ${minNumbers} numeric characters`,
    upperCharacters: `password must have at less ${minCapitalLetters} capitalized letters`,
    specialCharacters: `password must have at less ${minNonAlphaNumeric} non-alphanumeric characters`,
  }

  Object.keys(regexValidations).forEach((validationName) => {
    const isValid = regexValidations[validationName]

    !isValid &&
      ctx.addIssue({
        code: 'custom',
        message: errorMessages[validationName],
      })
  })
}
