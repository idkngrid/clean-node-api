import { type Collection, MongoClient } from 'mongodb'
import { type AccountModel } from '../../../../domain/models/account'

export const MongoHelper = {
  client: null as unknown as MongoClient,
  uri: null as unknown as string,

  async connect (uri: string): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri)
  },

  async disconnect () {
    if (this.client) {
      await this.client.close()
      this.client = null
    }
  },

  async getCollection (name: string): Promise<Collection> {
    if (!this.client) {
      await this.connect(this.uri)
    }
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
