const faker = require('faker')

module.exports.seed = async db => {
  const users = Array.from({ length: 10 }).map(() => ({
    name: faker.name.firstName(),
    surname: faker.name.lastName(),
    email: faker.internet.email(),
  }))

  const estates = Array.from({ length: 10 }).map(() => ({
    title: faker.lorem.words(),
    description: faker.lorem.sentence(),
    type: faker.random.arrayElement(['sale', 'lease']),
    amount: faker.finance.amount(),
    currency: faker.finance.currencyCode(),
    area: faker.random.number({ min: 20, max: 100 }),
    full_address: faker.address.streetAddress(),
    facilities: ['Wi-fi', 'Washing machine'],
  }))

  const medias = Array.from({ length: 10 }).map(() => ({
    url: faker.image.image(),
  }))

  await Promise.all(
    users.map(user =>
      db
        .table('users')
        .insert(user)
        .returning('id'),
    ),
  )

  await Promise.all(
    estates.map(estate =>
      db
        .table('estate')
        .insert(estate)
        .returning('id'),
    ),
  )

  await Promise.all(
    medias.map(media =>
      db
        .table('media')
        .insert(media)
        .returning('id'),
    ),
  )

  const estateIds = (await db.from('estate').select('id')).map(i => i.id)
  const mediaIds = (await db.from('media').select('id')).map(i => i.id)

  await Promise.all(
    estateIds.map(
      async id =>
        await Promise.all(
          Array.from({ length: faker.random.number({ min: 1, max: 5 }) }).map(() =>
            db.table('media_estate').insert({ estate_id: id, media_id: faker.random.arrayElement(mediaIds) }),
          ),
        ),
    ),
  )
}
