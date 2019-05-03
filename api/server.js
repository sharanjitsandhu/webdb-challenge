const express = require("express");
const helmet = require("helmet");

const projectsRouter = require("../projects/projectRouter.js");
const actionsRouter = require("../actions/actionRouter.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);

server.get("/", (req, res) => {
  res.status(200).send("API running");
});

module.exports = server;
