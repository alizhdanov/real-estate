import { data, Data, db, Knex } from './data'

export interface Context {
  data: Data
  db: Knex
}

export default () => ({
  data,
  db,
})
