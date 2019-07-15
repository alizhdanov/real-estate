import { objectType } from 'yoga'

export const Media = objectType({
  name: 'Media',
  definition(t) {
    t.id('id')
    t.string('url')
  },
})
