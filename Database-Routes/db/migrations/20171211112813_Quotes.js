
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Quotes', (table)=>{
    table.increments('');
    table.string('quote');
    table.string('img');
    table.string('writer')
    table.boolean('heart').defaultsTo(false);
    table.integer('category_id')
      .notNullable()
      .references('id')
      .inTable('Category')
      .onDelete('CASCADE')
      .index()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Quotes')
};
