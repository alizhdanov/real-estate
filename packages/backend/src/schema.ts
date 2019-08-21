import * as path from 'path'
import { makeSchema } from 'nexus'
import * as types from './graphql'

export const schema = makeSchema({
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
