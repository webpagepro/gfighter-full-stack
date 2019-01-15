exports.up = function(knex, Promise) {
  return knex.schema.createTable('fighters', function(table) {
    table.increments();
    
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('fighters');
};


exports.up = function(knex, Promise) {
  return knex.schema.createTable("fighters", (table) => {
    table.increments();
    table.string("name");
    table.text("bio");
    table.varchar("image_url");
    table.integer("strength");
    table.timestamps(true, true);

    }) 
};

  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTable("expenses")
};
