import { EmailValidatorAdapter } from './email-validator-adapter'

describe('EmailValidator Adapter', () => {
  it('should return false if validator returns false', () => {
    const signUpController = new EmailValidatorAdapter()
    const isValid = signUpController.isValid('invalid_email@mail.com')
    expect(isValid).toBe(false)
  })
})
