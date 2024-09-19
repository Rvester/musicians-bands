const path = require("path");
const { Sequelize, sequelize } = require("sequelize");

// TODO - create the new sequelize connection
const db = new Sequelize({
  dialect: "sqlite",
  storage: "./db.sqlite",
});

module.exports = {
  db,
};
