const { DataTypes, Model } = require("sequelize");
const { db } = require("../db");

class Song extends Model {}

Song.init(
  {
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
  },
  {
    sequelize: db,
    modelName: "Song",
  }
);
module.exports = {
  Song,
};
