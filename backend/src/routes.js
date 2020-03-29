const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const OngCrontroller = require("./Controllers/OngController");
const IncidentsController = require("./Controllers/IncidentsController");
const SessionController = require("./Controllers/SessionController");

const ProfileController = require("./Controllers/ProfileController");

const routes = express.Router();

routes.post("/sessions", SessionController.store);

routes.get("/ongs", OngCrontroller.index);

routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.string()
        .required()
        .min(10)
        .max(11),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length(2)
    })
  }),
  OngCrontroller.store
);

routes.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  ProfileController.index
);

routes.post("/incidents", IncidentsController.store);
routes.get(
  "/incidents",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number().required()
    })
  }),
  IncidentsController.index
);

routes.delete(
  "/incidents/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  }),
  IncidentsController.delete
);

module.exports = routes;
