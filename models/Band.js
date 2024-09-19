const { DataTypes, Model } = require("sequelize");
const { db } = require("../db");

class Band extends Model {}

Band.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "Band",
  }
);

module.exports = {
  Band,
};
