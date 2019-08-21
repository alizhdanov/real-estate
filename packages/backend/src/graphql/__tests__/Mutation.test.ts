import { graphql } from 'graphql'
import { schema } from '../../schema'
import MediaConnector from '../../models/media'
import EstateConnector from '../../models/estate'

const CREATE_ESTATE = `
    mutation create {
        createEstate(
            title: "test"
            type: "type"
            amount: 123
            currency: "EUR"
            description: "description of value"
            fullAddress: "123",
            media: ["http://google.com"]
        ) {
            id
        }
    }
`

describe('createEstate', () => {
  it('should work', async () => {
    // @ts-ignore
    EstateConnector.createEstate = jest.fn(() => [{ id: '1' }])
    // @ts-ignore
    MediaConnector.createEstateMedias = jest.fn(() => {})
    await expect(
      graphql(schema, CREATE_ESTATE, undefined, null),
    ).resolves.toEqual({})
  })
})
