import * as DataLoader from 'dataloader'

import { data, Data, db, Knex } from './data'
import { mapToMany } from './utils'

export interface Context {
  data: Data
  db: Knex
  retriever: Retriever
}

class Retriever {
  // TODO: move into models
  mediaByEstateId = new DataLoader(async (keys: (string | number)[]) => {
    const result = await db
      .table('media_estate')
      .whereIn('media_estate.estate_id', keys)
      .join('media', 'media_estate.media_id', '=', 'media.id')
      .select('media_estate.estate_id as key', 'media.id', 'media.url')
      .then(mapToMany(keys, x => x.key))

    return result
  })
}

export interface Estate {
  id: number
  title: string
  type: string
  amount: number
  currency: string
  description: string
  user_id: number | null
  full_address: string
  area: number
  facilities: string[]
}

export default () => ({
  data,
  db,
  retriever: new Retriever(),
})
