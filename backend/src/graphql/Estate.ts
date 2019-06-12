import { objectType, enumType } from 'yoga'

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
    t.field('user', {
      type: 'User',
      resolve: async ({ user_id }, args, ctx) => {
        const users = await ctx.db
          .table('users')
          .where({ id: String(user_id) })
          .select()

        // TODO: this can be substituted with .first()
        return users && users[0]
      },
    })
  },
})
