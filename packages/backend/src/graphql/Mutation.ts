import { mutationType, stringArg } from 'nexus'

/*
type Query {
  hello(name: String!): String!
  user(name: String!): User!
}
*/
export const Mutation = mutationType({
  definition(t) {
    t.field('createUser', {
      type: 'User',
      args: {
        name: stringArg(),
        surname: stringArg(),
        email: stringArg(),
      },
      resolve: async (root, { name, surname, email }, { db }) => {
        try {
          const user = await db
            .table('users')
            .insert({ name, surname, email })
            .returning('*')

          return user && user[0]
        } catch (err) {
          if (err.code === '23505') {
            throw new Error('User already exists')
          }

          throw err
        }
      },
    })

    t.field('updateUser', {
      type: 'User',
      args: {
        id: stringArg(),
        name: stringArg({ nullable: true }),
        surname: stringArg({ nullable: true }),
        email: stringArg({ nullable: true }),
      },
      resolve: async (root, { id, name, surname, email }, { db }) => {
        try {
          const user = await db
            .table('users')
            .where('id', '=', id)
            .update({
              ...(name && { name }),
              ...(surname && { surname }),
              ...(email && { email }),
            })
            .returning('*')

          return user && user[0]
        } catch (err) {
          throw err
        }
      },
    })

    t.field('deleteUser', {
      type: 'User',
      args: {
        id: stringArg(),
      },
      resolve: async (root, { id }, { db }) => {
        try {
          const user = await db
            .table('users')
            .where({ id: id })
            .del()
            .returning('*')

          return user && user[0]
        } catch (err) {
          throw err
        }
      },
    })
  },
})
