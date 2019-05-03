exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", function(table) {
    table.increments("id");

    table
      .integer("projectID")
      .unsigned()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table.string("description", 255).notNullable();

    table.string("notes", 255).notNullable();

    table.boolean("complete").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
