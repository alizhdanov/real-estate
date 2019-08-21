import { objectType, inputObjectType } from 'nexus'

export const Media = objectType({
  name: 'Media',
  definition(t) {
    t.id('id')
    t.string('url')
  },
})

export const MediaInputType = inputObjectType({
  name: 'MediaInputType',
  definition(t) {
    t.id('id', { nullable: true })
    t.string('url', { nullable: true })
  },
})
