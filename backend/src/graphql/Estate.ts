import { objectType } from 'yoga'

/*
type Estate {
  id: ID!
  title: String!
  description: String!
  user_id: ID!
}
*/

export const Estate = objectType({
  name: 'Estate',
  definition(t) {
    t.id('id')
    t.string('title')
    t.string('description')
    t.int('user_id')
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
