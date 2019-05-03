const express = require("express");

const Actions = require("./actionModel.js");

const router = express.Router();

router.post("/", async (req, res) => {
  let { projectID, notes, description, complete } = req.body;
  const newAction = { projectID, notes, description, complete };
  if (undefined === complete) {
    newAction.complete = false;
  }
  console.log(newAction);

  if (!notes || !description) {
    res.status(400).json("Error");
  } else {
    try {
      let reply = await Actions.insert(newAction);
      res.status(201).json(reply);
    } catch (error) {
      res.status(500).json({ errorMessage: "Error" });
    }
  }
});

router.get("/", async (req, res) => {
  try {
    let reply = await Actions.get();
    res.status(200).json(reply);
  } catch (error) {
    res.status(500).json({ errorMessage: "Error" });
  }
});

module.exports = router;
