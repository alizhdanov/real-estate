require('dotenv').config()
require('dotenv').config()

import { GraphQLServer } from 'graphql-yoga'
import context from './context'
import { schema } from './schema'

const apolloServer = new GraphQLServer({
  schema,
  context,
})

apolloServer.start(
  // some issues with now routing, fix it after deploying to proper hosting
  { port: '4477', playground: '/graphql', endpoint: '/graphql' },
  ({ port }) => console.log(`Server is running on http://localhost:${port}`),
)
