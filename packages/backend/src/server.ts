import * as path from 'path'
import { makeSchema } from 'nexus'
import { GraphQLServer } from 'graphql-yoga'
import * as types from './graphql'
import context from './context'

const schema = makeSchema({
  types,
  outputs: {
    schema: path.join(__dirname, './schema.graphql'),
    typegen: path.join(__dirname, '../.yoga/nexus.ts'),
  },
  nonNullDefaults: {
    input: true,
    output: true,
  },
  typegenAutoConfig: {
    sources: [
      {
        source: path.join(__dirname, './context.ts'),
        alias: 'ctx',
      },
    ],
    contextType: 'ctx.Context',
  },
}) as any

const apolloServer = new GraphQLServer({
  schema,
  context,
})

apolloServer.start({ port: '4477' }, ({ port }) =>
  console.log(`Server is running on http://localhost:${port}`),
)
