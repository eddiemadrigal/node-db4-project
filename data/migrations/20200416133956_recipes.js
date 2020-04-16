
exports.up = function(knex) {
  return knex.schema
    .createTable('dishes', tbl => {
      tbl.string('id', 255).primary();
      tbl.string('name', 255).notNullable().unique();
    })
    .createTable('ingredients', tbl => {
      tbl.string('id', 255).primary();
      tbl.string('name', 255).notNullable().unique();
    })
    .createTable('steps', tbl => {
      tbl.string('id', 255).primary();
      tbl.string('amount', 255);
      
      // foreign keys
      tbl.string('dish_id', 255)
      .notNullable()
      .references('id')
      .inTable('dishes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
      tbl.string('ingredients_id', 255)
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('dishes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps');
};
