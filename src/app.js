const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(bodyParser.json());
app.use("/api/users", userRoutes);

sequelize.sync({ alter: true }).then(() => {
  console.log("Database synced");
});

module.exports = app;
