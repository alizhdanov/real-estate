import { db } from '../data'
import { ESTATE_TABLE } from './constants'

class EstateConnector {
  static async createEstate(input: any) {
    return db
      .table(ESTATE_TABLE)
      .insert(input)
      .returning('*')
  }
}

export default EstateConnector
