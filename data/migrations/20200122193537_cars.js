
exports.up = function(knex) {
  return knex.schema
  .createTable('cars', tbl => {
      tbl.increments();
      tbl.string('VIN', 17)
      tbl.string('Make')
      tbl.string('Model')
      tbl.integer('Mileage')
  })

};
// Undo the changes from the up function
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
