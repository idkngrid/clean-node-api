import { EmailValidatorAdapter } from './email-validator-adapter'
import validator from 'validator'

const makeSignUpController = (): EmailValidatorAdapter => {
  return new EmailValidatorAdapter()
}

describe('EmailValidator Adapter', () => {
  it('should return false if validator returns false', () => {
    const signUpController = makeSignUpController()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = signUpController.isValid('invalid_email@gmail.com')
    expect(isValid).toBe(false)
  })

  it('should return true if validator returns true', () => {
    const signUpController = makeSignUpController()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(true)
    const isValid = signUpController.isValid('valid_email@mail.com')
    expect(isValid).toBe(true)
  })

  it('should call validator with correct email', () => {
    const signUpController = makeSignUpController()
    const isEmailSpy = jest.spyOn(validator, 'isEmail')
    signUpController.isValid('any_email@mail.com')
    expect(isEmailSpy).toHaveBeenCalledWith('any_email@mail.com')
  })
})
