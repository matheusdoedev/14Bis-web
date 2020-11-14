const express = require("express");
const path = require("path");
const cors = require("cors");
// routes
const usersRoutes = require("./routes/users");
// db
const sequelize = require("./config/database");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/users", usersRoutes);

module.exports = app;
