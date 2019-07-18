import * as knex from 'knex'
// @ts-ignore
export const db = knex({
  client: 'pg',
  connection: process.env.DB_CONNECTION,
  migrations: {
    tableName: 'migrations',
  },
  debug: true,
})

interface UserModel {
  id: string
  name: string
}

const users: UserModel[] = [
  {
    id: '1',
    name: 'Foo',
  },
  {
    id: '2',
    name: 'Bar',
  },
  {
    id: '3',
    name: 'John',
  },
]

export interface Data {
  users: UserModel[]
}

export type Knex = knex

export const data = {
  users,
}
