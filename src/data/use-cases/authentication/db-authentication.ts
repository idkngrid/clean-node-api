import { type AuthenticationModel, type Authentication } from '../../../domain/use-cases/authentication'
import { type LoadAccountByEmailRepository } from '../../protocols/load-account-by-email-repository'

export class DbAuthentication implements Authentication {
  private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository

  constructor (loadAccountByEmailRepositoryStub: LoadAccountByEmailRepository) {
    this.loadAccountByEmailRepository = loadAccountByEmailRepositoryStub
  }

  async auth (authentication: AuthenticationModel): Promise<string> {
    await this.loadAccountByEmailRepository.load(authentication.email)
    // @ts-expect-error
    return null
  }
}
