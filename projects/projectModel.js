const db = require("../dbConfig.js");

function get() {
  return db("projects");
}

const getByID = async function(id) {
  const concatProjectActions = async id => {
    const Project = await db("projects").where("projects.id", id);
    const actions = await db("actions")
      .select("id", "description", "notes", "complete")
      .where("actions.projectID", id);
    console.log(Project, actions);

    return { ...Project[0], actions };
  };

  const finalProject = await concatProjectActions(id);
  console.log(finalProject);
  return finalProject;
};

function insert(newProject) {
  console.log(newProject);
  return db("projects").insert(newProject);
}

function update(id, projectChanges) {
  return db("projects")
    .where({ id })
    .update(projectChanges);
}

function remove(id) {
  return db("projects")
    .where({ id })
    .del();
}

module.exports = {
  get,
  getByID,
  insert,
  update,
  remove
};
