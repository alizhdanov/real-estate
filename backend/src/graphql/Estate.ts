import { objectType, enumType } from 'yoga'

/*
type Estate {
  id: ID!
  title: String!
  description: String!
  user_id: ID!
}
*/

export const TypeEnum = enumType({
  name: 'EstateTypeEnum',
  members: ['sale', 'lease'],
})

export const Price = objectType({
  name: 'EstatePrice',
  definition(t) {
    t.float('amount')
    t.string('currency')
  },
})

export const Estate = objectType({
  name: 'Estate',
  definition(t) {
    t.id('id')
    t.string('title')
    t.field('type', { type: 'EstateTypeEnum' })
    t.field('price', {
      type: 'EstatePrice',
      resolve: ({ amount, currency }) => ({ amount, currency }),
    })
    t.string('description')
    t.int('user_id')
    t.int('amount')
    t.string('currency')
    t.field('user', {
      type: 'User',
      resolve: async (root, args, ctx) => {
        const users = await ctx.db
          .table('users')
          .where({ id: String(root.user_id) })
          .select()

        return users && users[0]
      },
    })
  },
})
