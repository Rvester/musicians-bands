const { DataTypes, Model } = require("sequelize");
const { db } = require("../db");

class Musician extends Model {}

Musician.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instrument: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "Musician",
  }
);

module.exports = {
  Musician,
};
