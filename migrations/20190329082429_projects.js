exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", function(table) {
    table.increments("id");

    table.string("name", 128).notNullable();

    table.string("description", 250).notNullable();

    table.boolean("complete").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
