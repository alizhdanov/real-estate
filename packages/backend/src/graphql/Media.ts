import { objectType } from 'nexus'

export const Media = objectType({
  name: 'Media',
  definition(t) {
    t.id('id')
    t.string('url')
  },
})
