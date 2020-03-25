const express = require("express");
const crypto = require("crypto");
const connection = require("./database/connection");

const OngCrontroller = require("./Controllers/OngController");

const routes = express.Router();

routes.get("/ongs", OngCrontroller.index);
routes.post("/ongs", OngCrontroller.store);

module.exports = routes;
