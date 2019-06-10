const faker = require('faker')

module.exports.seed = async db => {
  // Create 10 random website users (as an example)
  const users = Array.from({ length: 10 }).map(() => ({
    name: faker.name.firstName(),
    surname: faker.name.lastName(),
    email: faker.internet.email(),
  }))

  // const estates = [{ title: 'Flat 1', description: 'flat 1', type: 'rent', user_id: '1' }]

  const estates = Array.from({ length: 10 }).map(() => ({
    title: faker.lorem.words(),
    description: faker.lorem.sentence(),
    type: faker.random.arrayElement(['sale', 'lease']),
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
}
