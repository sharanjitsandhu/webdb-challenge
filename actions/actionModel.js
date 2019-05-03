const db = require("../dbConfig.js");

module.exports = {
  get,
  getByID,
  insert,
  update,
  remove
};

function get() {
  return db("actions");
}

function getByID(id) {
  return db("actions").where({ id });
}

function insert(newAction) {
  console.log(newAction);
  return db("actions").insert(newAction);
}

function update(id, actionChanges) {
  return db("actions")
    .where({ id })
    .update(actionChanges);
}

function remove(id) {
  return db("actions")
    .where({ id })
    .del();
}
