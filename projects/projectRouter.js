const express = require("express");

const Projects = require("./projectModel.js");

const router = express.Router();

router.post("/", async (req, res) => {
  let { name, description, complete } = req.body;
  const newProject = { name, description, complete };
  if (undefined === complete) {
    newProject.complete = false;
  }

  if (!name || !description) {
    res.status(400).json("Error");
  } else {
    try {
      let reply = await Projects.insert(newProject);
      res.status(201).json(reply);
    } catch (error) {
      res.status(500).json({ errorMessage: "Error" });
    }
  }
});

router.get("/", async (req, res) => {
  try {
    let reply = await Projects.get();
    res.status(200).json(reply);
  } catch (error) {
    res.status(500).json({ errorMessage: "Error" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    console.log("id");

    let reply = await Projects.getByID(id);
    res.status(200).json(reply);
  } catch (error) {
    res.status(500).json({ errorMessage: "Error" });
  }
});

module.exports = router;
