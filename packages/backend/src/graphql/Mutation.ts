import { mutationType, stringArg, intArg } from 'nexus'

import { db } from '../data'

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

    t.field('createEstate', {
      type: 'Estate',
      args: {
        title: stringArg(),
        description: stringArg(),
        type: stringArg(),
        amount: intArg(),
        currency: stringArg(),
        fullAddress: stringArg(),
      },
      resolve: async (root, { fullAddress: full_address, ...input }) => {
        const estate = await db
          .table('estate')
          .insert({ full_address, ...input })
          .returning('*')

        return estate && estate[0]
      },
    })

    t.field('updateEstate', {
      type: 'Estate',
      args: {
        id: stringArg(),
        title: stringArg({ nullable: true }),
        description: stringArg({ nullable: true }),
        type: stringArg({ nullable: true }),
        amount: intArg({ nullable: true }),
        currency: stringArg({ nullable: true }),
        fullAddress: stringArg({ nullable: true }),
      },
      resolve: async (root, { fullAddress: full_address, ...input }) => {
        const estate = await db
          .table('estate')
          .where({ id: input.id })
          .update({ full_address, ...input })
          .returning('*')

        return estate && estate[0]
      },
    })

    t.field('deleteEstate', {
      type: 'Estate',
      args: {
        id: stringArg(),
      },
      resolve: async (root, { id }, { db }) => {
        const estate = await db
          .table('estate')
          .where({ id: id })
          .del()
          .returning('*')

        return estate && estate[0]
      },
    })
  },
})
