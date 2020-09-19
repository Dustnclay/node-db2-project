
exports.up = function(knex,Promise) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.integer().unique('VIN').notNullable();
      tbl.text('make',128).notNullable();
      tbl.text('model',128).notNullable();
      tbl.integer('mileage',128).notNullable();
      tbl.text('transmission',128)
      tbl.text('title',128)
  })
};

exports.down = function(knex,Promise) {
  return knex.schema.dropTableIfExists('cars')
};
