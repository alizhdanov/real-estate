import {
  mutationType,
  stringArg,
  intArg,
  inputObjectType,
  mutationField,
} from 'nexus'

import { difference } from 'lodash'
import MediaConnector from '../models/media'
import EstateConnector from '../models/estate'
import console = require('console')

export const UpdateEstateInputType = inputObjectType({
  name: 'UpdateEstateInputType',
  definition(t) {
    t.field('medias', { type: 'MediaInputType', list: true })
  },
})

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
        input: UpdateEstateInputType,
      },
      resolve: async (
        root,
        { fullAddress: full_address, input, ...rest },
        { db },
      ) => {
        // update estate
        const estate = await db
          .table('estate')
          .where({ id: rest.id })
          .update({ full_address, ...rest })
          .returning('*')

        // get media related to estate
        const estateMedias = await MediaConnector.getEstateMedias(rest.id)

        const { medias } = input

        // divide media input on new and just media
        // new - which needed to be create
        // just - already created
        const [newMedias, justMedias] = medias.reduce(
          (acc, media) => {
            acc[media.id ? 1 : 0].push(media)
            return acc
          },
          [[], []],
        )

        // if there are new medias, we should create them
        if (newMedias.length) {
          MediaConnector.createEstateMedias(rest.id, newMedias)
        }

        const estateMediaIds = estateMedias.map(m => m.id)
        const justMediasIds = justMedias.map(j => Number(j.id))
        // compare ids to check which missing, in order to delete them
        const differenceIds = difference(estateMediaIds, justMediasIds)

        if (differenceIds.length) {
          // remove those different ids
          await MediaConnector.deleteEstateMedias(differenceIds)
        }

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

export const createEstate = mutationField('createEstate', {
  type: 'Estate',
  args: {
    title: stringArg(),
    description: stringArg(),
    type: stringArg(),
    amount: intArg(),
    currency: stringArg(),
    fullAddress: stringArg(),
    media: stringArg({ list: true }),
  },
  resolve: async (root, { fullAddress: full_address, media, ...input }) => {
    console.log('AGBONLAHOR')
    // creating estate
    const estate = await EstateConnector.createEstate({
      full_address,
      ...input,
    })

    console.log({ estate })
    await MediaConnector.createEstateMedias(
      estate[0].id,
      media.map(url => ({ url })),
    )
    return estate && estate[0]
  },
})
