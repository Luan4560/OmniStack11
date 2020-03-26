const express = require("express");
const crypto = require("crypto");
const connection = require("./database/connection");

const OngCrontroller = require("./Controllers/OngController");
const IncidentsController = require("./Controllers/IncidentsController");
const SessionController = require("./Controllers/SessionController");

const ProfileController = require("./Controllers/ProfileController");

const routes = express.Router();

routes.post("/sessions", SessionController.store);

routes.get("/ongs", OngCrontroller.index);
routes.post("/ongs", OngCrontroller.store);

routes.post("/incidents", IncidentsController.store);
routes.get("/incidents", IncidentsController.index);
routes.delete("/incidents/:id", IncidentsController.delete);

routes.get("/profile", ProfileController.index);

module.exports = routes;
