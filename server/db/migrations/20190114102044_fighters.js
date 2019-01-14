exports.up = function(knex, Promise) {
  return knex.schema.createTable('fighters', function(table) {
    table.increments();
    
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('fighters');
};