import * as knex from 'knex'

export const db = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    port: '5432',
    database: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
  // migrations: {
  //   tableName: 'migrations',
  // },
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

export const data = {
  users,
}
