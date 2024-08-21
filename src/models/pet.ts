import { DataTypes, Sequelize } from "sequelize";

function definePetModel(sequelize: Sequelize) {
  sequelize.define("pet", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      validate: { isInt: true },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isAlphanumeric: true },
    },
    birthday: {
      type: DataTypes.DATEONLY,
      validate: { isDate: true },
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isAlphanumeric: true },
    },
  });
}

export default definePetModel;