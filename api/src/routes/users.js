const express = require("express");
const routes = express.Router();
// controllers
const UserController = require("../app/controllers/UsersController");

routes.post("/user-authentication", UserController.postUserAuthentication);

routes.post("/", UserController.postCreateUser);

routes.get("/", UserController.getUserData);

routes.put("/", UserController.putUserData);

module.exports = routes;
