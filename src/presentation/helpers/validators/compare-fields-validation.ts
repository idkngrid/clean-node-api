import { InvalidParamError } from '../../errors'
import { type Validation } from '../../protocols/validation'

export class CompareFieldsValidation implements Validation {
  constructor (
    private readonly fieldName: string,
    private readonly fieldToCompareName
  ) {
    this.fieldName = fieldName
    this.fieldToCompareName = fieldToCompareName
  }

  // @ts-expect-error
  validate (input: any): Error {
    if (input[this.fieldName] !== input[this.fieldToCompareName]) {
      return new InvalidParamError(this.fieldToCompareName)
    }
  }
}
