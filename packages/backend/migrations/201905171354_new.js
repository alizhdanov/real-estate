module.exports.up = async db => {
  await db.schema.createTable('users', table => {
    table.increments()
    table.string('name').notNullable()
    table.string('surname').notNullable()
    table.string('email').notNullable()
    table.timestamps(false, true)

    table.unique('email')
  })

  await db.schema.createTable('estate', table => {
    table.increments()
    table.integer('user_id')
    table.string('title').notNullable()
    table.string('description').notNullable()
    table.string('type').notNullable() // rent type - sale / lease
    table.float('amount').notNullable()
    table.string('currency').notNullable()
    table.string('area')
    table.string('full_address').notNullable()
    table.specificType('facilities', 'text[]')
    // we need to add price, which might be super complicated
    // pictures
    table
      .foreign('user_id')
      .references('id')
      .inTable('users')
    table.timestamps(false, true)
  })

  await db.schema.createTable('media', table => {
    table.increments()
    table.string('url')
  })

  await db.schema.createTable('media_estate', table => {
    table.increments()
    table.integer('estate_id').references('estate.id')
    table.integer('media_id').references('media.id')
  })
}

module.exports.down = async db => {
  await db.schema.dropTableIfExists('estate')
  await db.schema.dropTableIfExists('users')
  await db.schema.dropTableIfExists('media')
  await db.schema.dropTableIfExists('media_estate')
}

module.exports.configuration = { transaction: true }
