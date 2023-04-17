import { DbAddAccount } from './db-add-account'
import { type Encrypter } from './protocols/encrypter'

interface SignUpControllerTypes {
  signUpController: DbAddAccount
  encrypterStub: Encrypter
}

const makeEncrypter = (): Encrypter => {
  class EncrypterStub implements Encrypter {
    async encrypt (value: string): Promise<string> {
      return await new Promise(resolve => { resolve('hashed_password') })
    }
  }
  return new EncrypterStub()
}

const makeSignUpController = (): SignUpControllerTypes => {
  const encrypterStub = makeEncrypter()
  const signUpController = new DbAddAccount(encrypterStub)
  return {
    signUpController,
    encrypterStub
  }
}

describe('DbAddAccount Usecase', () => {
  it('should call Encrypter with correct password', async () => {
    const { signUpController, encrypterStub } = makeSignUpController()
    const encryptSpy = jest.spyOn(encrypterStub, 'encrypt')
    const accountData = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password'
    }
    await signUpController.add(accountData)
    expect(encryptSpy).toHaveBeenCalledWith('valid_password')
  })
})
