import { type Collection, MongoClient } from 'mongodb'
import { type AccountModel } from '../../../../domain/models/account'

export const MongoHelper = {
  client: null as unknown as MongoClient,

  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri)
  },

  async disconnect () {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  },

  map (collectionById: any): any {
    const { _id, ...collectionWithoutId } = collectionById
    const collection = Object.assign({}, collectionWithoutId, {
      id: _id.toHexString()
    }) as AccountModel

    return collection
  }
}
