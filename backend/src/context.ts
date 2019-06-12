import { data, Data, db, Knex } from './data'

export interface Context {
  data: Data
  db: Knex
}

export interface Estate {
  id: number
  title: string
  type: string
  amount: number
  currency: string
  description: string
  user_id: number | null
}

export default () => ({
  data,
  db,
})
