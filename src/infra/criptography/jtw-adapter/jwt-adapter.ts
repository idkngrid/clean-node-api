
import jwt from 'jsonwebtoken'
import { type Encrypter } from '../../../data/protocols/criptography/encrypter'

export class JwtAdapter implements Encrypter {
  private readonly secret: string

  constructor (secret: string) {
    this.secret = secret
  }

  async encrypt (id: string): Promise<string> {
    jwt.sign({ id }, this.secret)
    // @ts-expect-error
    return null
  }
}
