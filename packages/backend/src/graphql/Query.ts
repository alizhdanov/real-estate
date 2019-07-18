import { queryType, stringArg, intArg, idArg } from 'nexus'

/*
type Query {
  hello(name: String!): String!
  user(name: String!): User!
}
*/
export const Query = queryType({
  definition(t) {
    t.string('hello', {
      args: {
        name: stringArg(),
      },
      resolve: (root, { name }) => `Hello ${name}`,
    })

    t.list.field('users', {
      type: 'User',
      resolve: async (root, args, ctx) => {
        const users = await ctx.db.table('users').select()

        return users
      },
    })

    t.field('estate', {
      type: 'Estate',
      args: {
        id: intArg(),
      },
      resolve: (_, { id }, ctx) => {
        return ctx.db
          .table('estate')
          .where('id', '=', id)
          .first()
      },
    })

    t.list.field('estates', {
      type: 'Estate',
      args: {
        limit: intArg({ default: 5 }),
        offset: intArg({ default: 0 }),
      },
      resolve: async (root, { limit, offset }, ctx) => {
        const estates = await ctx.db
          .table('estate')
          .offset(offset)
          .limit(limit)
          .select()

        return estates
      },
    })

    t.list.field('estatesOffsetBased', {
      type: 'Estate',
      args: {
        first: intArg({ default: 5 }),
        last: intArg({ default: 5 }),
        before: intArg({ default: 0 }),
        after: intArg({ default: 0 }),
      },
      resolve: async (root, { first, last, before, after }, ctx) => {
        const where = after ? ['>', after] : ['<', before]

        const estates = await ctx.db
          .table('estate')
          .where('id', ...where)
          .limit(after ? first : last)
          .select()

        return estates
      },
    })

    t.field('media', {
      type: 'Media',
      args: {
        id: idArg(),
      },
      resolve: async (root, { id }, ctx) => {
        return await ctx.db
          .table('media')
          .where('id', '=', id)
          .select()
          .first()
      },
    })
  },
})
