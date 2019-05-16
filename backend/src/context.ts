import { data, Data, db } from './data'

export interface Context {
  data: Data
  db: object
}

export default () => ({
  data,
  db,
})
