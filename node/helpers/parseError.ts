import type { ZodError, ZodIssueCode } from 'zod'

type ZodCodes = ZodIssueCode | 'default'

export const parseErrorMessage = (error: ZodError) => {
  const [zodError] = JSON.parse(error.message)
  const [fieldName] = zodError.path ?? ['']
  const errorSet: { [index: string]: string } = {
    invalid_string: `${fieldName} has a wrong format`,
    invalid_type: `${fieldName} is a ${zodError.message.toLocaleLowerCase()} value`,
    too_small: `${fieldName} must have at less ${zodError?.minimum} characters`,
    default: 'Some value is wrong',
    custom: `${zodError.message}`,
  }

  const code: ZodCodes = zodError.code ?? 'default'

  return errorSet[code] ?? errorSet.default
}
