const { DataTypes } = require("sequelize");
const db = require("../db");
// TODO - define the Song model
const Song = db.define("Song", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  length: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
module.exports = {
  Song,
};
